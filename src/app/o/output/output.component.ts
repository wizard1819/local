import { HttpParams } from '@angular/common/http';
import { Component, HostBinding, OnInit, HostListener } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, } from '@angular/forms';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit{
 
 day = new Date();


  name='harii';
  ngOnInit(): void {
  }


  
}
