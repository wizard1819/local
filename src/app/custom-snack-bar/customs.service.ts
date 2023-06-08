import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { CustomSnackBarComponent } from './custom-snack-bar.component';
@Injectable({
  providedIn: 'root'
})
export class CustomsService {

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor( private snackBar : MatSnackBar) { }

  openSnack(data : any){
    this.snackBar.openFromComponent(CustomSnackBarComponent,{
      duration:5000, horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      data: data
    })
  }
}
