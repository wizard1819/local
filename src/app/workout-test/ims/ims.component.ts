import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImgDialogComponent } from '../img-dialog/img-dialog.component';

@Component({
  selector: 'app-ims',
  templateUrl: './ims.component.html',
  styleUrls: ['./ims.component.css']
})
export class ImsComponent {

  @Input() images :any;
  @Input() index :any;
  @Output() delete= new EventEmitter();

  constructor(
    private d : MatDialog
  ){
    console.log(this.images);
  }

  fileRemove(){
    this.delete.emit(this.index);
  }


  opend(){
    this.d.open(ImgDialogComponent,{
      data:this.images.img,
      height:'auto',
      width:'auto'
    })
  }
}
