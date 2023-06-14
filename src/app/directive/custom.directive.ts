import { Directive , ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective implements OnInit{
  @Input() stringToSlice!: any;
  @Input() maxLength!: number;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    if (this.stringToSlice.length > this.maxLength) {
      const slicedString = this.stringToSlice.slice(0, this.maxLength).concat("...");
      this.elementRef.nativeElement.textContent = slicedString;
    }
  }

}
