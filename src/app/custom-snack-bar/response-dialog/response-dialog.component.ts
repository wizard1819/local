import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-response-dialog',
  templateUrl: './response-dialog.component.html',
  styleUrls: ['./response-dialog.component.css']
})
export class ResponseDialogComponent {

  constructor(
    private dialogRef : MatDialogRef<ResponseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data : any
  ) {
    this.dialogRef.updateSize("600px","auto");
   }

  ngOnInit(): void {

  }

  close(){
    this.dialogRef.close();
  }
}
