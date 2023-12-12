import { Component, OnInit, HostListener } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent {


  engs: any[]=[];
  imges:any[]=[];
  datas:any[]=[];
  constructor(
    private service : TestService
  ) {
  }

  onselect(event: any) {
   this.datas = event.target.files;
    this.datas.forEach((key:any)=>{
      console.log(this.datas);
      if(key?.size <= 10485760){
        const reader = new FileReader();
        reader.onload = (e) => {
          this.engs.push(e.target?.result);
        }
        reader.readAsDataURL(key);
      }
    })
   
  
  }


  showLog(){
    console.log(this.engs);
    this.service.setState(this.engs);
    this.imges.push(this.engs);
  }

}
