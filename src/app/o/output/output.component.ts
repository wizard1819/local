import { HttpParams } from '@angular/common/http';
import { Component, HostBinding, OnInit, HostListener } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, } from '@angular/forms';
import { fromEvent, scan } from 'rxjs';
@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit{
 
  constructor(){
   fromEvent(document,'click').subscribe(()=>{
    console.log('clicked');
   })
  }

  names:any[]=[
    {name:'abc',age:10},
    {name:'def',age:10},
    {name:'ghi',age:10},
    {name:'ghe',age:10},
  ]

  name:any[]=[
    {name:'abc',age:10},
  
  ]

  handleevent(event:any){
    console.log(event);
  }

  ngOnInit(): void {
  }

  chan(){
    const updatedNames = this.names.filter(nameObj => {
      const hasMatchingName = this.name.some(removeObj => removeObj.name === nameObj.name);
      return !hasMatchingName;
  });
  
  console.log(updatedNames);
  }
  
}
