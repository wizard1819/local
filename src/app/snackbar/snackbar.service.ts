import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { SnackbarComponent } from './snackbar.component';
@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(public snackbar: MatSnackBar) { }

  show(data?:any){
   const snackbar= this.snackbar.openFromComponent(SnackbarComponent,{
      data:data,
      panelClass:'custom',
      duration:2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    })

  }
}
