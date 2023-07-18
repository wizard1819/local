import { Component , OnInit, ViewEncapsulation} from '@angular/core';
import { FormGroup, FormControl, UntypedFormGroup,UntypedFormControl, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-turbocode',
  templateUrl: './turbocode.component.html',
  styleUrls: ['./turbocode.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class TurbocodeComponent {
 
  age:any;

  form:FormBuilder=new FormBuilder()
  check(){
    console.log(this.age,'agee');
  }

  }

