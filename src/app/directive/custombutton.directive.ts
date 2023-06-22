import { Directive , ElementRef} from '@angular/core';

@Directive({
  selector: '[appCustombutton]'
})
export class CustombuttonDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundcolor = 'Orange';
 }

}
