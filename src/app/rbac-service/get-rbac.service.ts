import { Injectable } from '@angular/core';
import { RbacService } from './rbac.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetRbacService {

  constructor(
    private checkRbac : RbacService
  ) { 
    this.setRbac();
  }


  rbacSubject : BehaviorSubject<rbacModel> = new BehaviorSubject<rbacModel>({} as rbacModel);

  setRbac(){
    let rbacValue : rbacModel = {
      dashboard :{
        view :this.checkRbac.checkRbac('DASHBOARD')
      }
    }

    this.rbacSubject.next(rbacValue);
  }



}
export interface rbacModel{
  dashboard : rbacCommon; 
}

export interface rbacCommon{
  view ?: boolean;
}