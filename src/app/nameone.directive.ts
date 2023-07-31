import { Directive , ElementRef , HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appNameone]'
})
export class NameoneDirective {

  @Input('appNameone') high!:string;

  constructor(public elementRef : ElementRef) {
    elementRef.nativeElement.style.color= 'green'
   }

  @HostListener('mouseover') function() {
    this.elementRef.nativeElement.style.color=this.high;
  }

  @HostListener('mouseleave') functio() {
    this.elementRef.nativeElement.style.color='white'
  }

}
