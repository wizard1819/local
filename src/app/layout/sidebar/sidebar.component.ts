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
    { name: 'one',          icon: 'perm_identity', routerlink: '/a' },
    { name: 'two',          icon: 'perm_identity', routerlink: '/b' },
    { name: 'Text Animation', icon: 'style', routerlink: '/text' },
    { name: 'COMPONENTS', icon: 'local_library', routerlink: '/angular' },
    { name: 'CHIPS', icon: 'local_library', routerlink: '/chips' },
    { name: 'CHIPS2', icon: 'local_library', routerlink: '/chips2' },
    { name: 'CHIPS3', icon: 'local_library', routerlink: '/chips3' },
    { name: 'SPINNER', icon: 'donut_large', routerlink: '/spinner' },
    { name: 'FOOD', icon: 'restaurant_menu', routerlink: '/food-org' },
    { name: 'Examples', icon: 'style', routerlink: '/tbs' },
    { name: 'Spinner-compass', icon: 'style', routerlink: '/expo' },
    { name: 'Sender', icon: 'style', routerlink: '/sender' },
    { name: 'Cart', icon: 'shopping_cart', routerlink: '/cart' },
    { name: 'product', icon: 'local_laundry_service', routerlink: '/prod' },
    { name: 'form', icon: 'group_add', routerlink: '/forms' },
    { name: 'CYCLE', icon: 'opacity', routerlink: '/cycle' },
    { name: 'toast', icon: 'report_problem', routerlink: '/toast' },
    { name: 'Wifi-spinner', icon: '3d_rotation', routerlink: '/page' },
    { name: 'studyone', icon: 'local_library', routerlink: '/studyone' },
    { name: 'subject', icon: 'local_library', routerlink: '/subj' },
    { name: 'tapMap', icon: 'local_library', routerlink: '/tap' },
    { name: 'Dynamic', icon: 'local_library', routerlink: '/dynamic' },
    { name: 'FormAdd', icon: 'local_library', routerlink: '/formadd' },
    { name: 'op', icon: 'local_library', routerlink: '/outpt' },
    { name: 'New Form', icon: 'local_library', routerlink: '/newForm' },
    { name: 'BU', icon: 'local_library', routerlink: '/bu' },
  ]

}
