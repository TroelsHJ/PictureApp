import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  @Input() isActive: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onComponentEnable() {
    this.isActive = true;
  }

  OnComponentDisable() {
    this.isActive = false;
  }
}
