import { Directive , ElementRef , HostListener} from '@angular/core';

@Directive({
  selector: '[appHostd]'
})
export class HostdDirective {


  constructor(public elementRef : ElementRef) {
   
   }

  @HostListener('keypress', ['$event']) onk(event:any) {
    console.log(event.cod);
  }

}
