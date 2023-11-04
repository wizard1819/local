import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tesing-rxjs',
  templateUrl: './tesing-rxjs.component.html',
  styleUrls: ['./tesing-rxjs.component.css']
})
export class TesingRxjsComponent {
  @Input() public val :any;
  @Input() public keys :any;
  @Input() public header :any;
  @Output() give = new EventEmitter<any>;


  constructor(
  ){
   
  }

  returnvalue(){
    this.give.emit('hello');
  }

}
