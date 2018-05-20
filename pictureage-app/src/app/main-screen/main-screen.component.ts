import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppService } from './../app.service';

declare let device;
// declare let Camera: any;
declare let navigator: any;

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {

  m_dareText = "Dare you to press the camera and see how old we think you are";

  AppService: AppService;
  Router: Router;


  constructor(
    // private AppService: AppService,
    // private Router: Router,
  ) { }

  ngOnInit() {
    // alert(device.platform)
  }

  takePicture() {
    if (device.platform == "Android") {
      document.addEventListener("deviceready", this.openCamera);
    }
    else if (device.platform == "browser") {
      this.Router.navigate(["/take-picture"]);
    }
  }

  openCamera() {
    navigator.camera.getPicture(
      (BASE64_URL) => {
        document.addEventListener("resume", () => {
          // alert(BASE64_URL);
          // this.AppService.SaveBASE64(BASE64_URL);
          this.Router.navigate(["/proces-picture"])
        });
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
