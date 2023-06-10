import { Component , OnInit} from '@angular/core';
import { TurbocodeService } from './turbocode.service';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-turbocode',
  templateUrl: './turbocode.component.html',
  styleUrls: ['./turbocode.component.css']
})
export class TurbocodeComponent implements OnInit{
c:any;
  countc:any;
  constructor(
    private service : TurbocodeService
  ){}
    
  ngOnInit(): void {
    this.showCount();
  }

 increment(){
  this.service.count++;
  // this.c=this.service.count
  console.log(this.service.count);
 } 

 clearcount(){
  this.service.count=0;
 }

 showCount(){
  setInterval(() => {
    this.c=this.service.count;
  }, 1);
 }
  }

