import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppService } from './../app.service';

declare let device;
declare let navigator;

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent {

  m_dareText = "Dare you to press the camera and see how old we think you are";

  constructor(
    private AppService: AppService,
    private Router: Router,
  ) { }

  takePicture() {
    if (device.platform == "Android") {
      // document.addEventListener("deviceready", this.openCamera.bind(this));
      this.openCamera();
    }
    else if (device.platform == "browser") {
      this.Router.navigate(["/take-picture"]);
    }
  }

  openCamera() {
    navigator.camera.getPicture(
      (data) => {
        this.AppService.SaveBASE64(data)
        this.Router.navigate(["/proces-picture"]);
      },
      (error) => {
        alert("Unable to obtain camera app: " + error);
      },
      {
        sourceType: 1,
        quality: 50,
        destinationType: 0,
        allowEdit: false,
        correctOrientation: true,
        cameraDirection: 0,
      }
    );

  }
}
