import { Component , OnInit} from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-workout-test',
  templateUrl: './workout-test.component.html',
  styleUrls: ['./workout-test.component.css']
})
export class WorkoutTestComponent implements OnInit{

  constructor(){}

  names =[
    {name:'guna',id:1},
    {name:'guna',id:1},
    {name:'guna',id:1},
    {name:'guna',id:1},
    {name:'guna',id:1},
  ]
  ngOnInit(): void {
      let a = from([1,2,3]);
      a.subscribe((res)=>{
        console.log(res);
      });
      console.table(this.names);
  }
}
