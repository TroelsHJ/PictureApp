import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppService } from './../app.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {

  m_dareText = "Dare you to press the camera and see how old we think you are";

  constructor(
    private Router: Router
  ) { }

  ngOnInit() {
  }

  takePicture() {
    this.Router.navigate(["/take-picture"]);
  }
}
