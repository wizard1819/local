import { Component, OnInit } from '@angular/core';
import { Observable, Subject, asyncScheduler, from, observeOn, of, queueScheduler } from 'rxjs';

@Component({
  selector: 'app-workout-test',
  templateUrl: './workout-test.component.html',
  styleUrls: ['./workout-test.component.css']
})
export class WorkoutTestComponent implements OnInit {

  constructor() { }


 

  ngOnInit(): void {

 
    asyncScheduler.schedule(this.showLog,2000);
    queueScheduler.schedule((x)=> {console.log('queue')});
  }

  showLog(){
    console.log('its hit');
  }
}
