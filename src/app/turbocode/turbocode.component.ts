import { Component , OnInit, ViewEncapsulation} from '@angular/core';
import { FormGroup, FormControl, UntypedFormGroup,UntypedFormControl, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-turbocode',
  templateUrl: './turbocode.component.html',
  styleUrls: ['./turbocode.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class TurbocodeComponent {
 
  names:any=['guna','arun','velu','praveen','hari'];
 
  constructor(){
    this.random()
  }
  name:any;
  random(){
    setInterval(()=>{
      this.name=this.names[Math.floor(Math.random()*this.names.length)];
    },500)
   
  }

  }

