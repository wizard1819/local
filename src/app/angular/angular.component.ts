import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { VehicleService } from '../vehicle/vehicle.service';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {
  guna='kk';
  bg='';
  pageSize: number = 10;
  pageIndex: number = 0;
  colorrr:any={bg:'gray',nav:'black',sb:'lightgrey'}
  constructor(
    private service: VehicleService
  ) { }
  myControl = new FormControl('');
  options: string[] = [];
  heroo: Hero[] = HEROES;
  vehicles: any[] = [];
  vehi: any[] = [];
  filteredOptions!: Observable<string[]>;

  ngOnInit() {
this.persistedimg();
console.log('hello');
console.log(this.bg)
    
  }

 

  getimg() {
    return this.bg;
  }

  setimg(img: any) {
this.bg=img;
localStorage.setItem("bg",img);
// localStorage.setItem('bg', JSON.stringify(img));
  }

  persistedimg(){
    const persis=localStorage.getItem('bg');

    if(persis){
      this.bg=persis;
    }
  }





}
