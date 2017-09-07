import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestClientService } from './restClient'
import { ProductService, ProductResolver, ProductsResolver } from './productService'
import { ClientService, ClientResolver, ClientsResolver } from './clientService'
import { DriverService, DriverResolver, DriversResolver } from './driverService'

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    RestClientService,
    ProductService, ProductResolver, ProductsResolver,
    ClientService, ClientResolver, ClientsResolver,
    DriverService, DriverResolver, DriversResolver
  ],
  declarations: []
})
export class ShansServices { }
