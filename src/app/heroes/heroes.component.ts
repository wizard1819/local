import { Component, OnInit, OnChanges } from '@angular/core';
import { Hero } from '../hero';
import { HeroesService } from './heroes.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {


  private behsub!:BehaviorSubject<any>
  obs$!:Observable<any>;
  constructor(){
   this.behsub=new BehaviorSubject<any>(null);
   
  }


  arra: any[] = ['hari', 'guna', 'velu', 'rathees', 'praveen', 'arun'];


  ngOnInit(): void {
    this.arra.forEach((num) => {
      console.log(num, this.arra);
    })
  }

}

