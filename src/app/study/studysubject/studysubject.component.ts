import { Component } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { SubjectService } from './subject.service';

@Component({
  selector: 'app-studysubject',
  templateUrl: './studysubject.component.html',
  styleUrls: ['./studysubject.component.css']
})
export class StudysubjectComponent {

  nums: any;
  count!: number;
  constructor(
    private service: SubjectService
  ) {
    //when subscribe used observable is triggered
    let obs$: Observable<any> = of(1, 2, 3);
    obs$.subscribe(x => {
      console.log(x);
    });
    var sub: Subject<any> = new Subject();
    sub.subscribe(x => {
      console.log(x);
    })
    sub.next('gopi');
    sub.next('helo');
    //end

    //subject
    service.obs$.subscribe(x => {
      console.log(x, 'obs');
      this.nums = x;
    })

    //behavioursubject
    service.behobs$.subscribe(x => {
      console.log(x, 'behaobs');
    })

    //replaysubject

    this.service.repObs$.subscribe(x => {
      console.log(x, 'replayObs');
    })

  }

  emit() {
    this.service.sendData('hello sub');
    this.service.sendBehData('hello behaviour sebject');
    this.service.sendReplay('replay');
   
  }
}
