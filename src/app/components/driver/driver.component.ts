import { Component, OnInit, Input } from '@angular/core';
import { Driver } from "../../cls";


@Component({
  selector: 'driver',
  templateUrl: './driver.component.html'
})
export class DriverComponent implements OnInit {
  @Input() driver: Driver
  
  constructor() { }

  ngOnInit() {
  }

}
