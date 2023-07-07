import { Component, Input } from '@angular/core';
import { CycleService } from '../cycle.service';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent {

  count:any;
  constructor(
    private servcie : CycleService
  ){
  servcie.count$.subscribe((data)=>{
    this.count=data;
  })
  }

  inc(){
    this.servcie.incrementCount();
    console.log(this.count,'inc');
  }
  
  dec(){
    this.servcie.decrementCount();
    console.log(this.count,'dec')
  }
}
