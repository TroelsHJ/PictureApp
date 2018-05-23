import { Component, OnInit, NgZone } from '@angular/core';
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
    private Zone: NgZone,
  ) { }

  takePicture() {
    if (device.platform == "Android") {
      // In order to make sure I can access the camera through the cordova pluging, I need to make sure the 'deviceready' event has triggered. 
      // That is why I've added an eventlistener here. 
      // Found it necessary to to use '.bind()' in order to maintain or carry the scope/context on to the callback function. 
      // The AppService and Router are available to the component class, and the context is lost in a callback function. 
      document.addEventListener("deviceready", this.openCamera.bind(this));
    }
    else if (device.platform == "browser") {
      this.Router.navigate(["/take-picture"]);
    }
  }

  openCamera() {
    // When the native camera is active, this app is set "on-hold" by the device, and pushed to the background. 
    // Upon return to this app, I experienced some issues with the getting the router to navigate to the next component.
    // As far as I can tell and on the basis of research, it is because an uncaught error in this component. 
    // Whether it is caused by the native camera or the component, I don't know, but I think it must be an angular error, seeing as it keeps the angular router from moving on. 
    // Anyway - importing the NgZone angular module, and using the 'this.Zone.run()' method, I'm able to force it to run what-ever is inside that. 
    // This will then snap it out of what-ever-it-is-stock-(not)-doing, and force it through. 

    // This is also why I found it necessary to exclude the animation import from app.module.ts', because it is aparently in this module the the bug is?    
    // If i didn't exclude it, the router would not properly run the 'Destroy' life cycle hook, and remove the component from the DOM. 
    // Instead of removing or replacing the current component, it would simply add the next component to the DOM. 
    // And seeing as the next component would not be loaded properly, the 'ngOnInit()' and the other life cycle hook would not be triggered.  

    navigator.camera.getPicture(
      (data) => {
        this.AppService.SaveBASE64(data);
        this.Zone.run(() => {
          this.Router.navigate(["/proces-picture"]);
        })
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
        cameraDirection: 0
      }
    );

  }
}
