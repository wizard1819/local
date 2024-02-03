import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject, asyncScheduler, from, observeOn, of, queueScheduler } from 'rxjs';

@Component({
  selector: 'app-workout-test',
  templateUrl: './workout-test.component.html',
  styleUrls: ['./workout-test.component.css']
})
export class WorkoutTestComponent implements OnInit {

 @ViewChild('inp') ip! :ElementRef;

  constructor() { }




  urls = new Array<string>();
  ngOnInit(): void {


    console.log(this.urls);

  }


  selectedFile: any;
  file: any;
  imgs = new Array<any>;
  fileSelect(event: any) {
    const inputElement = event.target.files[0];
    this.file = inputElement;
    console.log(this.file);
    if (this.file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.selectedFile = e.target?.result;
        console.log(this.selectedFile, 'file');
        let b = { img: this.selectedFile, details: inputElement };
        this.imgs.push(b);
        console.log(this.imgs);
        this.ip.nativeElement.value =  null;
      };
      reader.readAsDataURL(this.file);
      console.log(this.file, 'common');

    }
  }


  remFile(event?:any){
    this.imgs.splice(event,1);
    if(this.imgs.length == 0){
      this.ip.nativeElement.value =  null;
    }
  }

}
