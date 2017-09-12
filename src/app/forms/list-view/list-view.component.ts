import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client, DescriptionInterface } from '../../cls';

@Component({
  selector: 'list-view',
  templateUrl: './list-view.component.html'
})
export class ListViewComponent implements OnInit {
  data: any[];
  description: DescriptionInterface;

  constructor(public activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.data = this.activatedRoute.snapshot.data["list"];
    if (this.activatedRoute.data) {
      this.description = this.activatedRoute.snapshot.data["description"];
    }
  }

}
