import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRouteSnapshot, Routes } from '@angular/router';

@Component({
  selector: 'nav',
  templateUrl: './top-bar.component.html',
  host: {"class": "navbar navbar-default navbar-fixed-top"},
})

export class TopBarComponent implements OnInit, AfterViewInit{
  isCollapsed: boolean = true

  @Input("links") links: Array<any> = [];
  @Input("brand") brand = "Name";

  constructor() {
    ;
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.links);
  }

  outsideClick(event) {
    if (!this.isCollapsed)
      this.isCollapsed = true;
  }

  collapseButtonClick(event) {
    this.isCollapsed = !this.isCollapsed;
  }
}
