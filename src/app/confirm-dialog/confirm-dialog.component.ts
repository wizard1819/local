import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit{

  public header! : string;
  public message! : string;

  constructor(
    private dialogRef : MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data : any
  ) {
    this.dialogRef.updateSize("auto","auto");
   }

  ngOnInit(): void {
    this.header = this.data.header;
    this.message = this.data.message;
  
  }

  close(){  
    this.dialogRef.close();
  }

  accept(){
    this.dialogRef.close({
      data : true
    });
  }
}
