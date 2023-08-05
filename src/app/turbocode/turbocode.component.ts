import { Component, ViewChild, ComponentFactoryResolver, HostBinding } from '@angular/core';
import { HostDirective } from '../directive/host.directive';
@Component({
  selector: 'app-turbocode',
  templateUrl: './turbocode.component.html',
  styleUrls: ['./turbocode.component.css'],
})

export class TurbocodeComponent {

  @ViewChild(HostDirective, { static: true }) childRef!: HostDirective;
  @HostBinding('style.color') color = 'green';

 
} 

