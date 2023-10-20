import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formcheck',
  templateUrl: './formcheck.component.html',
  styleUrls: ['./formcheck.component.css']
})
export class FormcheckComponent implements OnInit {

  searchForm!: FormControl;
  form!: FormControl;
  constructor(
    private fb: FormBuilder
  ) { }

 

  ngOnInit(): void {
  this.searchForm = new FormControl();
  this.form = new FormControl();

 
  }



 


  

 
}
