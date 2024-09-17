import { Component, ElementRef, OnInit, ViewChild,  } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, distinctUntilChanged, Observable, switchMap } from 'rxjs';
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {



  form!: FormGroup;
  radio!: FormGroup
  
  constructor(
    private  fb : FormBuilder,
  ) {
  
  }


  typeInput$ = new BehaviorSubject<any>('');

  typeWrite ! : FormControl;
  ngOnInit(): void {

    this.form = this.fb.group({
      name : new FormControl(null)
    })
    this.typeWrite = new FormControl(null,Validators.nullValidator);

  
  this.typeInput$.subscribe((res)=>{
       
  });
    
  }


  changes(event : any){
    this.typeInput$.next(event.target.value);
  }
  
  // gunaseelan.ramasamy@turbocode.in


 

}
