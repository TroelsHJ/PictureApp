import { Component, OnInit, OnChanges, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { AppService } from './../app.service';
import { environment } from '../../environments/environment'

@Component({
  selector: 'app-process-image',
  templateUrl: './process-image.component.html',
  styleUrls: ['./process-image.component.css']
})
export class ProcessImageComponent implements OnInit {

  m_imgDataBASE64: any;
  m_imgDataBlob: Blob;
  m_ageGuess: number;
  m_processingText: string = "Asking around..";

  constructor(
    private AppService: AppService,
    private Router: Router,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.m_imgDataBASE64 = this.AppService.GetBASE64();
    this.m_imgDataBlob = this.AppService.MakeAndGetBlob();
    this.CallObserver(this.m_imgDataBlob);
    setTimeout(() => {
      this.Router.navigate(["/age-result"]);
    }, 5000);
  }

  CallObserver(_imgDataBlob: Blob) {
    this.GetDataFromAPI(_imgDataBlob)
      .subscribe(
        (value) => {
          console.log(value);
          this.m_ageGuess = this.FilterDataFromURL(value);
          this.AppService.SaveAge(this.m_ageGuess);
        },
        (error) => { console.log(error)}
      )
  }

  GetDataFromAPI(_imgDataBlob: Blob): Observable<any[]> {
    let url = "https://westcentralus.api.cognitive.microsoft.com/vision/v1.0/analyze?visualFeatures=Tags,Faces";

    let httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/octet-stream')
      .set('ocp-apim-subscription-key', environment.visonConfig.apiKey);

    return this.http.post<any[]>(url, _imgDataBlob, {
      headers: httpHeaders,
      responseType: 'json'
    });
  }

  FilterDataFromURL(_value: any): number {
    return _value.faces[0].age;
  }


}
