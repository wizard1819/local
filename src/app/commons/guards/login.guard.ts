import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
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
        return true;
      }  else{
        this.router.navigate(['/login']);
        return false;
      }
  }
  
}

export interface CanComponentDeactivate{
  canDeactivate:()=> Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class candeactivate implements  CanDeactivate<CanComponentDeactivate> {

  constructor(
    private service : LoginService,
    private router : Router
  ){}
 
  canDeactivate(
    component : CanComponentDeactivate
    ):any{
    return component && component.canDeactivate ? component.canDeactivate() : true;
  }
  
}