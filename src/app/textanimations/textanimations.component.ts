import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-textanimations',
  templateUrl: './textanimations.component.html',
  styleUrls: ['./textanimations.component.css']
})
export class TextanimationsComponent {

  name:any;

  form:FormControl;
  constructor(){
    this.form = new FormControl()
  }

  fileName(event?:any){
    console.log(event.target.files[0]);
    this.name = event.target.files[0];
  }

  clear(){
    this.form.setValue(null);
  }
}
