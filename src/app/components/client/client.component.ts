import { Component, OnInit, Input } from '@angular/core';
import { Client } from "../../cls";


@Component({
  selector: 'client',
  templateUrl: './client.component.html'
})
export class ClientComponent implements OnInit {
  @Input() client: Client
  
  constructor() { }

  ngOnInit() {
  }

}
