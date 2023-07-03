import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private service : LoginService,
    private router : Router
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any{
      if(this.service.loggedin()){
        console.log('inn');
        return true;
      }  else{
        this.router.navigate(['/login']);
        return false;
      }
  }

}

@Injectable({
  providedIn: 'root'
})
export class childguard implements  CanActivateChild {

  constructor(
    private service : LoginService,
    private router : Router
  ){}
 
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):any{
     
      if(this.service.loggedin()){
        console.log('inn');
        return true;
      }  else{
        this.router.navigate(['/login']);
        return false;
      }
  }
  
}
