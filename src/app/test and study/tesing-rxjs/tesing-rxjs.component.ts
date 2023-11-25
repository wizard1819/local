import { Component, EventEmitter, Input, Output, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { read } from '@popperjs/core';
import { Observable, of, map, interval, Subject, from, ReplaySubject, multicast, BehaviorSubject, observeOn, asyncScheduler,tap } from 'rxjs';
import { TestService } from 'src/app/test/test.service';
@Component({
  selector: 'app-tesing-rxjs',
  templateUrl: './tesing-rxjs.component.html',
  styleUrls: ['./tesing-rxjs.component.css']
})

export class TesingRxjsComponent implements OnInit {




 
  constructor(
    private service : TestService
    ) {


  }

  imag :any;
  ngOnInit(): void {
  this.imag= this.service.state;
  }

}



