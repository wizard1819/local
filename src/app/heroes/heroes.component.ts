import { Component , OnInit, OnChanges} from '@angular/core';
import { Hero } from '../hero';
import { HeroesService } from './heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  heroo:Hero[]=[];

  constructor(private service: HeroesService){}

  findAll(){
   this.heroo=this.service.getAll();
  }


ngOnInit():void{
  console.log("got successfully");
 this.findAll();
}

}

