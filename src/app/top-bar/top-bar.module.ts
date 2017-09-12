import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BlurDirectiveModule } from '../blur-directive';

import { TopBarComponent } from './top-bar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BlurDirectiveModule
  ],
  declarations: [TopBarComponent],
  exports: [TopBarComponent]
})
export class TopBarModule { }
