import { Component , OnInit, OnChanges} from '@angular/core';
import { Hero } from '../hero';
import { HeroesService } from './heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {


  arra:any[]=[1,2,3,4,5,6];


ngOnInit():void{
  console.log("got successfully");
  this.arra.forEach((num)=>{
    console.log(num);
  })
}

}

