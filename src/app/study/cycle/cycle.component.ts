import { Component, EventEmitter, OnChanges, Output, OnInit } from '@angular/core';
import { CycleService } from './cycle.service';

@Component({
  selector: 'app-cycle',
  templateUrl: './cycle.component.html',
  styleUrls: ['./cycle.component.css']
})
export class CycleComponent implements OnInit {

  constructor(
    private service: CycleService
  ) {
   }
  count = 0;
  paath=window.history;
  
  names = [
    { name: 'guna', age: 20 },
    { name: 'guna', age: 20 },
    { name: 'guna', age: 20 },
    { name: 'guna', age: 20 },
    { name: 'guna', age: 20 },
    { name: 'guna', age: 20 },
    { name: 'guna', age: 20 },
    { name: 'guna', age: 20 },
    { name: 'guna', age: 20 },
    { name: 'guna', age: 20 },
    { name: 'guna', age: 20 },
    { name: 'guna', age: 20 },
    {
      nm: [
        { fn: 'gunaseelan', ln: 'kr', age: 30 },
        { fn: 'gunaseelan', ln: 'kr', age: 30 }
      ]
      , age: 30
    },
  ]


  ngOnInit(): void {
    this.service.count$.subscribe((cts) => {
      this.count = cts;
      console.log()
    })
  }
}
