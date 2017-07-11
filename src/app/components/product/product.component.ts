import { Component, OnInit, Input } from '@angular/core';
import { Product } from "../../cls";

@Component({
  selector: 'product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {
  @Input() product: Product
  
  constructor() { }

  ngOnInit() {
  }

}
