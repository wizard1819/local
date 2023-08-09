import { Component, Input,Output, EventEmitter } from '@angular/core';
import { from, map, tap } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  
  

  @Input() input:any;
  @Output() output = new EventEmitter<any>();

  emit(data?:any){
    this.output.emit(data);
  }

  getData(){
    const numbers$ = from([1, 2, 3, 4, 5]);

    numbers$.pipe(
     tap(
      res=>{
        console.log(res);
      }
     )
    ).subscribe(result => console.log(result));
  }
}
