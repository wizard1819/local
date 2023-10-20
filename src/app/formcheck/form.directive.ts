import { Directive, ElementRef, HostListener,  } from '@angular/core';

@Directive({
  selector: '[appForm]'
})
export class FormDirective {



  constructor(
    private el: ElementRef
  ) { }

  @HostListener('keypress', ['$event']) keypress(event: any) {
    if (event.keyCode == 32 && this.el.nativeElement.value == '') {
      console.log(event, this.el.nativeElement.value);
    }
  }
}
