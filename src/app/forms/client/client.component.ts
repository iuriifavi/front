import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Client } from "../../cls";


@Component({
  selector: 'client',
  templateUrl: './client.component.html',
})
export class ClientComponent implements OnInit {
  @Input() client: Client
  @Input() editable: boolean = false;
  
  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if (this.activatedRoute.data) {
      this.client = this.activatedRoute.snapshot.data["client"];
      this.editable = this.activatedRoute.snapshot.data["editable"];
    }
  }

}
