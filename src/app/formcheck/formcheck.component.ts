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

  gender:any=[
    {id:1,code:'M',gender:'MALE'},
    {id:2,code:'F',gender:'FEMALE'},
    {id:3,code:'N',gender:'NOT SPECIFIED'},
  ]

 leadScore:any[]=[
  {from:'10',to:'20',id:1},
  {from:'20',to:'30',id:2},
  {from:'30',to:'40',id:3},
  {from:'40',to:'50',id:4},
  {from:'50',to:'60',id:5},
  {from:'60',to:'70',id:6},
 ]

 code='N';
  ngOnInit(): void {
  this.searchForm = new FormControl();
  this.form = new FormControl();

  this.searchForm.valueChanges.subscribe((res)=>{
    this.show();
  })
  }



  show(){
    for(let x of this.leadScore){
      if(this.searchForm.value == x.id){
        console.log('the id is',x.from,x.to);
      }
    }

    
    for(let y of this.gender){
      if(y.code == this.code){
        this.form.setValue(y.id);
      }
    }
    console.log(`${this.searchForm.value} then for gender ${this.form.value}`);
  }


  

 
}
