import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

status:any;
tok:any;
  constructor(
    private router : Router
  ) { }

  check(data?:any){
     if(data.name=='qqqq'&&data.password=='qqqq'){
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

     }
  }

  loggedin(){
    this.tok=localStorage.getItem('token');
    return this.tok!=null;
  }
  
  signout(){   
    localStorage.removeItem('tok');
   this.router.navigate(['/login']);
  }
}
