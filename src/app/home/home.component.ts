import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  date = Date();
  sec: any;
  min: any;
  hrs: any;
  splits: string[] = this.date.split(' ');

  constructor() {
    // console.log(this.timee);
  }
 
  timee: any = this.splits
  currentTime!: string;


  ngOnInit(): void {
    setInterval(() => {
      const date = new Date();

      const hours = date.getHours().toString().padStart(2, '0');
      this.hrs = hours + " ";

      const minutes = date.getMinutes().toString().padStart(2, '0');
      this.min = `:${minutes}`;

      const seconds = date.getSeconds().toString().padStart(2, '0');
      this.sec = seconds;


      this.currentTime = `${hours}:${minutes}:${seconds}`;
      // this.currentTime =hours+":"+minutes+":"+seconds;
      // console.log(this.currentTime);
    }, 1000);
  }


}
