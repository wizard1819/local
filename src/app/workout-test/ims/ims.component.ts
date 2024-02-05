import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImgDialogComponent } from '../img-dialog/img-dialog.component';

@Component({
  selector: 'app-ims',
  templateUrl: './ims.component.html',
  styleUrls: ['./ims.component.css']
})
export class ImsComponent {

  @Input() images: any;
  @Input() index: any;
  @Output() delete = new EventEmitter();
  @Output() edits = new EventEmitter();
  @ViewChild('ip') ip!: ElementRef;

  constructor(
    private d: MatDialog
  ) {
  }

  fileRemove() {
    this.delete.emit(this.index);
  }


  opend() {
    this.d.open(ImgDialogComponent, {
      data: this.images.img,
      height: '80vh',
      width: '100vw'
    })
  }

  changeImage(event: any) {
    const img = event.target.files[0];
    if (img) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.images.img = e.target?.result;
        this.images.details = img;
      };
      reader.readAsDataURL(img);
      this.edit();
      this.ip.nativeElement.value = null;
    }
  }

  edit() {
    this.edits.emit(this.images);
  }
}
