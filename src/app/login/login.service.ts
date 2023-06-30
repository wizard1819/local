import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SnackbarService } from '../snackbar/snackbar.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

status:any;
tok:any;
  constructor(
    private router : Router,
    private snackbarservice : SnackbarService,
  ) { }

  check(data?:any){
     if(data.name=='guna'&&data.password=='1234'){
      this.status='xyz123';
      localStorage.setItem('token',this.status);
      console.log(localStorage.getItem('token'), 'tok');
      console.log(this.loggedin(),'logged in')
      this.router.navigate(['/home']);
     }
     else{
      localStorage.removeItem('token');
      console.log(localStorage.getItem('token'), 'tok');
      console.log(this.loggedin(),'logged out');
      this.snackbarservice.show('Invalid UserName/Password');

     }
  }

  loggedin():any{
    this.tok = localStorage.getItem('token');
    if(this.tok=='xyz123'&& this.tok != null && this.tok != undefined){
      return true;
    }
  }
  
  signout(){   
    localStorage.removeItem('token');
    this.tok = localStorage.setItem('token', 'abcdef');
    console.log(this.tok,'ook');
    this.router.navigate(['/login']);
  }
}
