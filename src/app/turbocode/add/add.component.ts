import { Component, OnInit } from '@angular/core';
import { TurbocodeService } from '../turbocode.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{

  constructor(
    private service : TurbocodeService
  ){}

ngOnInit(): void {
  
}

incrrr(){
  this.service.count++;
}

}
