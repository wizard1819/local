import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SnackbarService } from '../snackbar/snackbar.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { UserTable } from './usertable';
import { Subscription, Observable,of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  log:boolean=true;
  status: any;
  tok: any;
  constructor(
    private router: Router,
    private snackbarservice: SnackbarService,
    private dialog: MatDialog,
  ) { }

  check(data?: any) {
    if (data.userName == 'guna' && data.password == '1234') {
      this.status = 'xyz123';
      localStorage.setItem('token', this.status);
      console.log(localStorage.getItem('token'), 'tok');
      console.log(this.loggedin(), 'logged in')
      this.router.navigate(['/home']);
      this.snackbarservice.show('Logged In SuccessFully!!');
    }
    else {
      localStorage.removeItem('token');
      console.log(localStorage.getItem('token'), 'tok');
      console.log(this.loggedin(), 'logged out');
      this.snackbarservice.show('Invalid UserName/Password');

    }
  }

  loggedin(): any {
    this.tok = localStorage.getItem('token');
    if (this.tok == 'xyz123' && this.tok != null && this.tok != undefined) {
      return true;
    }
  }

  signout() {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        header: "Logout",
        message: "Are you Sure want to Logout?"
      },
      disableClose: true
    })

    dialogRef.afterClosed().subscribe(
      (result) => {
        if (result && result.data) {
          localStorage.removeItem('token');
          this.tok = localStorage.setItem('token', 'abcdef');
          console.log(this.tok, 'ook');
          this.router.navigate(['/login']);
        }
      }
    )

  }

  submit(data?: any):any {
    const foundUser = UserTable.find(user => user.name === data.userName && user.password === data.password);
    if (foundUser?.name == data.userName && foundUser?.password == data.password) {
      this.status = 'xyz123';
      localStorage.setItem('token', this.status);
      console.log(localStorage.getItem('token'), 'tok');
      console.log(this.loggedin(), 'logged in')
      this.router.navigate(['/home']);
      this.snackbarservice.show('Logged In SuccessFully!!');
      return of(this.log);
    } else {
      localStorage.removeItem('token');
      console.log(localStorage.getItem('token'), 'tok');
      console.log(this.loggedin(), 'logged out');
      this.snackbarservice.show('Invalid UserName/Password');

    }
  }
}
