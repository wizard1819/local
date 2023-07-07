import { Component , EventEmitter, OnChanges, Output, OnInit} from '@angular/core';
import { CycleService } from './cycle.service';

@Component({
  selector: 'app-cycle',
  templateUrl: './cycle.component.html',
  styleUrls: ['./cycle.component.css']
})
export class CycleComponent  implements OnInit{

  constructor(
    private service : CycleService
  ){}
  count=0;

ngOnInit(): void {
this.service.count$.subscribe((cts)=>{
  this.count=cts;
  console.log()
})
}
}
