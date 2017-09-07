import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable';

import { RestClientService } from '../services'
import { Product } from '../cls'

@Injectable()
export class ProductService {
  restService: RestClientService

  constructor(protected http: Http) {
    this.restService = new RestClientService("http://localhost:3000/products", http)
  }

  getAll(skip?: Number, limit?: Number): Observable<Product[]> {
    return this.restService.get(null);
  }

  get(id): Observable<Product> {
    return this.restService.get(id);
  }

  update(product: Product): Observable<Product>{
    return this.restService.put(product, product._id);
  }

  delete(product: Product): Observable<any> {
    return this.restService.delete(product._id);
  }
}

@Injectable()
export class ProductsResolver implements Resolve<Product[]> {
  constructor(private productService: ProductService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Product[]> {
    return this.productService.getAll();
  }
}

@Injectable()
export class ProductResolver implements Resolve<Product> {
  constructor(private productService: ProductService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Product> {
    return this.productService.get(route.params.id);
  }
}

