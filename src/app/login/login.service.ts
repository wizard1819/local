import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SnackbarService } from '../snackbar/snackbar.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { UserTable } from './usertable';
import { Subscription, Observable, of, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  log: boolean = true;
  status: any;
  tok: any;
  constructor(
    private router: Router,
    private snackbarservice: SnackbarService,
    private dialog: MatDialog,
  ) { }

  public num: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public ct = this.num.asObservable();

  check(data: any): any {
    if (data.userName == 'guna' && data.password == '1234') {
      this.status = 'xyz123';
      localStorage.setItem('token', this.status);
      this.router.navigate(['/home']);
      this.snackbarservice.show('Logged In SuccessFully!!');
      return of(this.log);
    }
    else {
      localStorage.removeItem('token');
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
          this.router.navigate(['/login']);
        }
      }
    )

  }

  submit(data?: any): any {
    const foundUser = UserTable.find(user => user.name === data.userName && user.password === data.password);
    if (foundUser?.name == data.userName && foundUser?.password == data.password) {
      this.status = 'xyz123';
      localStorage.setItem('token', this.status);
      this.router.navigate(['/home']);
      this.snackbarservice.show('Logged In SuccessFully!!');
      return of(this.log);
    } else {
      localStorage.removeItem('token');
      this.snackbarservice.show('Invalid UserName/Password');
      return of(!(this.log));

    }
  }
}
