import { Directive, ElementRef,HostBinding } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = '#3f51b5';
    
 }
 @HostBinding('style.font-weight') fontWeight='bold';
}


@Directive({
  selector: '[blue]'
})
export class blue {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = '#3f51b5';
    
 }
 @HostBinding('style.font-weight') fontWeight='bold';
}


