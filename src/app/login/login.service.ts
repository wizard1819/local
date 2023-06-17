import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  set status(token: string)
  {
      localStorage.setItem('tok', token);
  }

  get status(): string
  {
      return localStorage.getItem('tok') ?? '';
  }
  constructor(
    private router : Router
  ) { }

  check(data?:any){

    this.status=data;
  }
  
  signout(){
   
    localStorage.removeItem('tok');
   this.router.navigate(['/login']);
  }
}
