import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Driver } from "../../cls";


@Component({
  selector: 'driver',
  templateUrl: './driver.component.html'
})
export class DriverComponent implements OnInit {
  @Input() driver: Driver
  @Input() editable: boolean = false;
  
  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if (this.activatedRoute.data) {
      this.driver = this.activatedRoute.snapshot.data["driver"];
      this.editable = this.activatedRoute.snapshot.data["editable"];
    }
  }

}
