import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Router, RouterModule } from '@angular/router'

import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

import { FormsModule } from "./forms";
import { PrintModule } from './print';

import { AppComponent } from './app.component';
import { ShansRoutes } from './routes';
import { ShansServices } from './services';
import { TopBarModule } from './top-bar';
import { BlurDirectiveModule } from './blur-directive';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    TopBarModule,
    FormsModule,
    HttpModule,
    PrintModule,
    ShansServices,
    ShansRoutes,
    BlurDirectiveModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
