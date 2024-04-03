import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-read-pdf',
  templateUrl: './read-pdf.component.html',
  styleUrls: ['./read-pdf.component.css']
})
export class ReadPdfComponent implements OnInit {

  forms!: FormControl;

  val:any='filter';
  ngOnInit(): void {
    this.forms = new FormControl(null,Validators.nullValidator);


    if(this.val == 'filter'){
      this.forms.setValue(false);
    }else{
      this.forms.setValue(true);
    }

    localStorage.setItem("hello",'guna');
    localStorage.setItem("hello",'hari');

    console.log(localStorage.getItem('hello'));
    
  }
}
