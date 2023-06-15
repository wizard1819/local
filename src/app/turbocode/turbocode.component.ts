import { Component , OnInit, ViewEncapsulation} from '@angular/core';
import { TurbocodeService } from './turbocode.service';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from '../snackbar/snackbar.service';
@Component({
  selector: 'app-turbocode',
  templateUrl: './turbocode.component.html',
  styleUrls: ['./turbocode.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TurbocodeComponent implements OnInit{
c:any;
  countc:any;
  myString='mnbvcxsdfgthjklkjhgfv'
  constructor(
    private service : TurbocodeService,
    private snackbar :MatSnackBar,
    private snack : SnackbarService
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

 opensnack(){
  this.snack.show('TURBOCODE TECHNOLOGIES');
 }



 open(){
  this.snackbar.open('Custom SnackBar!!','',{
    panelClass:'custom',
    duration:2000
  });
}
  }

