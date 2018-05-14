import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { Stream } from 'stream';
import { Router } from '@angular/router';

import { AppService } from './../app.service';

@Component({
  selector: 'app-capture-image',
  templateUrl: './capture-image.component.html',
  styleUrls: ['./capture-image.component.css']
})
export class CaptureImageComponent implements OnInit {

  @ViewChild('video') m_video: any;
  @ViewChild('canvas') m_canvas: any;

  constructor(
    private AppService: AppService,
    private Router: Router
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.m_video = this.m_video.nativeElement;
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(Stream => {
          this.m_video.src = window.URL.createObjectURL(Stream);
          this.m_video.play();
        }).catch((err) => { console.log(err.name + ": " + err.message) })
    }
  }

  TakePicture() {
    this.ProcessImage((data) => {
      this.AppService.SaveBASE64(data);
      this.Router.navigate(["/proces-picture"])
    });
  }

  ProcessImage(_returnFunction: any) {
    let canvas = this.m_canvas.nativeElement;
    let context = canvas.getContext('2d');
    let image = context.drawImage(this.m_video, 0, 0, 1024, 1024, 0, 0, 480, 320);
    let dataURL = canvas.toDataURL();
    _returnFunction(dataURL);
  }
}
