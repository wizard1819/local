import { Component , OnInit} from '@angular/core';
import { TurbocodeService } from './turbocode.service';
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

