import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Router, RouterModule } from '@angular/router'

import { FormsModule } from "./forms";
import { PrintModule } from './print';

import { AppComponent } from './app.component';
import { ShansRoutes } from './routes';
import { ShansServices } from './services';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpModule,
    PrintModule,
    ShansServices,
    ShansRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
