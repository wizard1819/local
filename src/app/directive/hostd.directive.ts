import { Directive , ElementRef , HostListener} from '@angular/core';

@Directive({
  selector: '[appHostd]'
})
export class HostdDirective {


  constructor(public elementRef : ElementRef) {
    elementRef.nativeElement.style.color= 'green'
   }

  @HostListener('mouseover') function() {
    this.elementRef.nativeElement.style.color='red'
  }

}
