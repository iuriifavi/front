import { NgModule, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Directive, ElementRef, Renderer, ChangeDetectorRef, HostListener } from '@angular/core';

@Directive({ selector:'[blurDirective]'})
export class BlurDirective{
  @Output('blurDirective') blurDirective: EventEmitter<any> = new EventEmitter<any>();

  constructor(private el:ElementRef, private rd:Renderer){
  }

  @HostListener("window:click", ['$event.target'])
  onOutsideClick(target) {
    let element = this.el.nativeElement;
    while(element != target) {
      if (!target.parentElement) break;
      target = target.parentElement;
    }

    if (element != target)
      return this.blurDirective.emit(true);
  }

}

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [BlurDirective],
  declarations: [BlurDirective]
})

export class BlurDirectiveModule { }
