import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from "../../cls";

@Component({
  selector: 'product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {
  @Input() product: Product
  @Input() editable: boolean = false;
  
  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if (this.activatedRoute.data) {
      this.product = this.activatedRoute.snapshot.data["product"];
      this.editable = this.activatedRoute.snapshot.data["editable"];
    }
  }

}
