import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../../cls';

@Component({
  selector: 'list-view',
  templateUrl: './list-view.component.html'
})
export class ListViewComponent implements OnInit {
  client: Client;

  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.client = this.activatedRoute.snapshot.data["list"];
  }

}
