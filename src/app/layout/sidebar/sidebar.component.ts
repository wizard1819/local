import { Component } from '@angular/core';

export interface sidebar {
  name: any,
  icon: any,
  routerlink: any
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})


export class SidebarComponent {
  panelOpenState=true;
  //sidebarmenu
  sidebarmenu: sidebar[] = [
    { name: 'Vehicle',       icon: 'motorcycle', routerlink: '/bike' },
    { name: 'Hero',          icon: 'perm_identity', routerlink: '/hero' },
    { name: 'Text Animation', icon: 'style', routerlink: '/text' },
    { name: 'COMPONENTS', icon: 'local_library', routerlink: '/angular' },
    { name: 'CHIPS', icon: 'local_library', routerlink: '/chips' },
    // { name: 'SPINNER', icon: 'donut_large', routerlink: '/spinner' },
    // { name: 'FOOD', icon: 'restaurant_menu', routerlink: '/food-org' },
    { name: 'Examples', icon: 'style', routerlink: '/tbs' },
    { name: 'EXPO', icon: 'style', routerlink: '/expo' },
    { name: 'Sender', icon: 'style', routerlink: '/sender' },
    { name: 'Cart', icon: 'list', routerlink: '/cart' },
    { name: 'product', icon: 'list', routerlink: '/prod' },
    { name: 'form', icon: 'list', routerlink: '/forms' },
    { name: 'CYCLE', icon: 'list', routerlink: '/cycle' },
  ]

}
