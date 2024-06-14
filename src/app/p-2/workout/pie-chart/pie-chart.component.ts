import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild,  } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  @ViewChild('img') img !: ElementRef;


  form!: FormGroup;
  radio!: FormGroup
  
  constructor(
    private  fb : FormBuilder,
    private http : HttpClient
  ) {
  
  }


  chartOptions: any = {};


  imageUrl = 'https://dealoncart-qa.s3.us-west-2.amazonaws.com/product/73/IMAGE/1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240612T050004Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=AKIA26ELWGGAI3EBBJM7%2F20240612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=69376741350433865d920430bbaac867b5592e951be892ce240631eae5b0efc6';

  ngOnInit(): void {

  
  }

  checkImageValidity() {
    this.http.get(this.imageUrl, { responseType: 'blob' }).subscribe(
      response => {
        console.log('Image is accessible.');
      },
      error => {
        console.log('Image is not accessible.');
      }
    );
  }

  clck(){
    console.log(this.img);
    this.checkImageValidity();
  }



 

}
