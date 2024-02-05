import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-img-dialog',
  templateUrl: './img-dialog.component.html',
  styleUrls: ['./img-dialog.component.css']
})
export class ImgDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private d: MatDialogRef<ImgDialogComponent>
  ) { }

  num = 0;
  cls = "size";

  ngOnInit(): void {

  }

  inc() {
    if (this.num <= 3) {
      this.num++;
      if (this.num == 1) {
        this.cls = 'size1'
      }
      if (this.num == 2) {
        this.cls = 'size2'
      }
      if (this.num == 3) {
        this.cls = 'size3'
      }
      if (this.num == 4) {
        this.cls = 'size4'
      }
    }

  }

  dec() {
    if (this.num >= 2) {
      this.num--;
      if (this.num == 1) {
        this.cls = 'size1'
      }
      if (this.num == 2) {
        this.cls = 'size2'
      }
      if (this.num == 3) {
        this.cls = 'size3'
      }
      if (this.num == 4) {
        this.cls = 'size4'
      }
    }
  }
}
