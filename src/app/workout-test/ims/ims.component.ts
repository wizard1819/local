import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ims',
  templateUrl: './ims.component.html',
  styleUrls: ['./ims.component.css']
})
export class ImsComponent {

  @Input() images :any;
  @Input() index :any;
  @Output() delete= new EventEmitter();

  constructor(){
    console.log(this.images);
  }

  fileRemove(){
    this.delete.emit(this.index);
  }
}
