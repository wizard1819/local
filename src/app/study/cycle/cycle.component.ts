import { Component , EventEmitter, OnChanges, Output} from '@angular/core';

@Component({
  selector: 'app-cycle',
  templateUrl: './cycle.component.html',
  styleUrls: ['./cycle.component.css']
})
export class CycleComponent implements OnChanges{
  currentItem = 'television';
  @Output() newItemEvent = new EventEmitter<string>();
  ngOnChanges(data:any) {

  }

  handleChange(event: any) {
    const value = event.target.value;
    console.log('Input value changed:', value);
    // Perform any other desired actions with the changed value
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
  
}
