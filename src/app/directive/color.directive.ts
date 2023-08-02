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
  selector: '[header]'
})
export class bdirr {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = 'black';
    
 }
//  @HostBinding('style.font-weight') fontWeight='bold';
 @HostBinding('style.font-size.px') size='30';
}