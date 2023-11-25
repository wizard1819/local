import { Component, OnInit,ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, UntypedFormArray, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Observable, from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-guna',
  templateUrl: './guna.component.html',
  styleUrls: ['./guna.component.css']
})
export class GunaComponent implements OnInit {


  form!: UntypedFormGroup

  head :any[]=[];
  vals :any[]=[];
  names =[
    {name:'guna',age:20,gender :"male"},
    {name:'guna',age:20,gender :"male"},
    {name:'guna',age:20,gender :"male"},
    {name:'guna',age:20,gender :"male"},
    {name:'guna',age:20,gender :"male"},
    {name:'guna',age:20,gender :"male"},
  ]
  constructor() { }

  a: any;
  ngOnInit(): void {
    this.form = new UntypedFormGroup({
      val: new UntypedFormArray([])
    })
    this.addControls();

    Object.keys(this.names[0]).forEach((key)=>{
      this.head.push(key.toLocaleUpperCase());
      this.vals.push(key);
    })
  }


  addControls() {
    this.a = this.form.get('val') as FormArray;
   
    console.log(this.form.controls, this.a);
  }

  add() {
    let b = new UntypedFormGroup({
      name: new UntypedFormControl(null)
    })
    this.a.push(b);
  }

  showLog() {
    console.log(this.form.value?.val);
  }

  rem(i?: any) {
    this.a.removeAt(i);
  }


  getemit(event:any){
    console.log(event)
  }
}
