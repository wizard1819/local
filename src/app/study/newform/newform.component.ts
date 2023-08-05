import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, FormControl, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-newform',
  templateUrl: './newform.component.html',
  styleUrls: ['./newform.component.css']
})
export class NewformComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      myArray: this.fb.array([]),
    });
    this.addNewFormGroup();
  }

  get myArray() {
    return this.myForm.get('myArray') as FormArray;
  }

  addNewFormGroup() {
    const newGroup = this.fb.group({
      name: [null,Validators.required],
      age: [null,Validators.required],
    });
    this.myArray.push(newGroup);
  }

  removeFormGroup(index: number) {
    this.myArray.removeAt(index);
  }
  
  click(){
    console.log(this.myForm.value,'value');
  }
}
