import { Injectable } from '@angular/core';
import { LOCAL_APP } from '../common/common';

@Injectable({
  providedIn: 'root'
})
export class RbacService {

  constructor() { }



  checkRbac(rbac : string){
    let rbacs = localStorage.getItem(LOCAL_APP.RBAC);
    console.log(rbacs,'LOCAL APP RBAC');
    if(rbacs?.includes(rbac)){
      return true;
    }else{
      return false;
    }
  }

}
