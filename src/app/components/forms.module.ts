import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditableLabelModule } from "../editable-label";

import { DriverComponent } from './driver/driver.component';
import { ClientComponent } from './client/client.component';
import { ProductComponent } from './product/product.component';
import { ListViewComponent } from './list-view/list-view.component';

@NgModule({
  imports: [
    CommonModule,
    EditableLabelModule
  ],
  declarations: [DriverComponent, ClientComponent, ProductComponent, ListViewComponent],
  exports: [DriverComponent, ClientComponent, ProductComponent, ListViewComponent]
})
export class FormsModule { }
