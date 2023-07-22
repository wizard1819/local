import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, } from '@angular/forms';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit{
  param:any;

  public form: UntypedFormGroup = Object.create(null);
  name:any={id:1,name:'address',formcontrol:'names',group:'form'};
  
  ngOnInit(): void {
    this.form = new UntypedFormGroup({
      names: new UntypedFormControl(null, [
      ]),})
      this.add();
  }

  add(){
   this.param= new HttpParams();
   this.param=this.param.append('orgType','o,b');
   console.log(this.param);
  }
}
