import { Injectable } from '@angular/core';
import { GROCEY_PERMISSIONS } from './permission';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }


  rbacValue: any;
  parsedValue: any;
  checkPermission(component: string, action: string): boolean {
    let found: number = -1;

    GROCEY_PERMISSIONS.map(permission => {
      if (permission.hasOwnProperty('component')) {
        if (permission.component === component && permission.action === action) {
         
        }
      }
    });

    return found > -1 ? true : false;
  }

}
