import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, of, Subject, tap } from 'rxjs';
import { fileAttach, logCat } from 'src/app/commons/utils/core.utils';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {


  formGroup!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  fileAttach(data: any) {
    console.log(fileAttach(data));
  }



}
