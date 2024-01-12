import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SnackbarService } from '../snackbar/snackbar.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { UserTable } from './usertable';
import { Subscription, Observable, of, BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  log: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  status: any;
  tok: any;
  constructor(
    private router: Router,
    private snackbarservice: SnackbarService,
    private dialog: MatDialog,
    private rout : ActivatedRoute
  ) { }

  public num: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public ct = this.num.asObservable();

  check(data: any){
    if (data.userName == '1111' && data.password == '1111') {
      this.status = 'xyz123';
      localStorage.setItem('token-local-app', this.status);
      this.router.navigate(['/home']);
      this.snackbarservice.show('Welcome to Phase-I');
      // this.log.next(true);
      console.log(this.rout,'routtt');
    }
    else if(data.userName == '2222' && data.password == '2222'){
      this.status = 'xyz123';
      localStorage.setItem('token-local-app', this.status);
      this.router.navigate(['/dashboard']);
      this.snackbarservice.show('Welcome to Phase-II');
      // this.log.next(true);
      return
    }
    else {
      localStorage.removeItem('token-local-app');
      this.snackbarservice.show('Invalid UserName/Password');
      // this.log.next(false)

    }
  }

  loggedin(): any {
    this.tok = localStorage.getItem('token-local-app');
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
          localStorage.removeItem('token-local-app');
          this.router.navigate(['/login']);
        }
      }
    )

  }

  signOut(){
    localStorage.removeItem('token-local-app');
    this.router.navigate(['/login']);
  }

  submit(data?: any): any {
    const foundUser = UserTable.find(user => user.name === data.userName && user.password === data.password);
    if (foundUser?.name == data.userName && foundUser?.password == data.password) {
      this.status = 'xyz123';
      localStorage.setItem('token-local-app', this.status);
      this.router.navigate(['/home']);
      this.snackbarservice.show('Logged In SuccessFully!!');
      return of(this.log);
    } else {
      localStorage.removeItem('token-local-app');
      this.snackbarservice.show('Invalid UserName/Password');
      return of(!(this.log));

    }
  }
}
