import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrintRoutes } from './routes';
import { PodatkovaComponent } from './podatkova/podatkova.component';


@NgModule({
  imports: [
    CommonModule,
    PrintRoutes
  ],
  declarations: [PodatkovaComponent],
  exports: [
    PodatkovaComponent,
  ]
})
export class PrintModule { }
