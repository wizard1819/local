import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from './snackbar.component';
@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(public snackbar: MatSnackBar) { }

  show(data?:any){
   const snackbar= this.snackbar.openFromComponent(SnackbarComponent,{
      data:data,
      panelClass:'custom',
      duration:2000,
    })

  }
}
