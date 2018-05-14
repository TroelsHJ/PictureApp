import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private Router: Router) {
  }

  // ngOnInit() {
  //   this.Router.navigate(["/proces-picture"]);
  // }

  ngOnInit() {
    this.Router.navigate(["/splash-screen"]);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.Router.navigate(["/main-screen"]);
    }, 3000);

  }


}
