import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {



  form!: FormGroup;
  radio!: FormGroup
  
  constructor(
    private  fb : FormBuilder
  ) {
  
  }


  chartOptions: any = {};



  ngOnInit(): void {

    this.radio = this.fb.group({
     
    });


    this.form = this.fb.group({
      need : new FormControl(null,Validators.required),
      name: new FormControl(null,Validators.required),
      age: new FormControl(null,Validators.required),
    });
  }



 

}
