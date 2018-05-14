import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { AppService } from './../app.service';


@Component({
  selector: 'app-process-image',
  templateUrl: './process-image.component.html',
  styleUrls: ['./process-image.component.css']
})
export class ProcessImageComponent implements OnInit {

  m_imgDataBASE64: string;
  m_imgDataBlob: Blob;
  m_ageGuess: number;
  m_processingText: string = "Asking around..";

  constructor(
    private AppService: AppService,
    private Router: Router,
    private http: HttpClient
  ) { }


  ngOnInit() {
    this.m_imgDataBASE64 = this.AppService.GetBASE64();
    this.m_imgDataBlob = this.MakeBlob(this.m_imgDataBASE64);
    this.AppService.SaveBlob(this.m_imgDataBlob);
    this.CallObserver(this.m_imgDataBlob);
    setTimeout(() => {
      this.Router.navigate(["/age-result"]);
    }, 3000);
  }

  MakeBlob(_imgData: any): Blob {
    let BASE64_MARKER = ';base64,';
    if (_imgData.indexOf(BASE64_MARKER) == -1) {
      let parts = _imgData.split(',');
      let contentType = parts[0].split(':')[1];
      let raw = decodeURIComponent(parts[1]);
      return new Blob([raw], { type: contentType });
    }
    let parts = _imgData.split(BASE64_MARKER);
    let contentType = parts[0].split(':')[1];
    let raw = window.atob(parts[1]);
    let rawLength = raw.length;
    let uInt8Array = new Uint8Array(rawLength);

    for (let i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }
    return new Blob([uInt8Array], { type: contentType });
  }

  CallObserver(_imgDataBlob: Blob) {
    this.GetDataFromAPI(_imgDataBlob)
      .subscribe(
        (value) => {
          console.log(value);
          this.m_ageGuess = this.FilterDataFromURL(value);
          this.AppService.SaveAge(this.m_ageGuess);
        },
        (error) => { console.log(error) }
      )
  }

  GetDataFromAPI(_imgDataBlob: Blob): Observable<any[]> {
    let url = "https://westcentralus.api.cognitive.microsoft.com/vision/v1.0/analyze?visualFeatures=Tags,Faces";

    let httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/octet-stream')
      .set('ocp-apim-subscription-key', '');

    return this.http.post<any[]>(url, _imgDataBlob, {
      headers: httpHeaders,
      responseType: 'json'
    });
  }

  FilterDataFromURL(_value: any): number {
    return _value.faces[0].age;
  }


}
