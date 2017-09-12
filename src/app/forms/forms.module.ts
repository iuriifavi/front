import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

import { EditableLabelModule } from "../editable-label";

import { DriverComponent } from './driver/driver.component';
import { ClientComponent } from './client/client.component';
import { ProductComponent } from './product/product.component';
import { ListViewComponent } from './list-view/list-view.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { ClientsRoutes , ProductsRoutes, DriversRoutes } from './routes';

@NgModule({
  imports: [
    CommonModule,
    EditableLabelModule,
    ClientsRoutes,
    ProductsRoutes,
    DriversRoutes,
    AngularFontAwesomeModule
  ],
  declarations: [DriverComponent, ClientComponent, ProductComponent, ListViewComponent, WelcomeComponent],
  exports: [DriverComponent, ClientComponent, ProductComponent, ListViewComponent, WelcomeComponent ]
})
export class FormsModule { }
