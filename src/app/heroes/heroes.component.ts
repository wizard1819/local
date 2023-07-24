import { Component, OnInit, OnChanges } from '@angular/core';
import { Hero } from '../hero';
import { HeroesService } from './heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {


  arra: any[] = ['hari', 'guna', 'velu', 'rathees', 'praveen', 'arun'];


  ngOnInit(): void {
    this.arra.forEach((num) => {
      console.log(num, this.arra);
    })
  }

}

