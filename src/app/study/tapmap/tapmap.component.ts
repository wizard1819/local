import { Component, Input, HostBinding,HostListener } from '@angular/core';
import {fromEvent, pipe} from 'rxjs';
import {tap, map} from 'rxjs/operators'
@Component({
  selector: 'app-tapmap',
  templateUrl: './tapmap.component.html',
  styleUrls: ['./tapmap.component.css']
})
export class TapmapComponent {

  

 
  @Input() name!: string;

  constructor(){
    // const click=fromEvent(document,'click');
    // const positions= click.pipe(
    //   tap(ev=> console.log(ev)),
    //   map(ev=> console.log('map'))
    // )
    // positions.subscribe(x=> console.log(x));
  }
}
