import { Component, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() ip!:any;
  @Output() myEvent = new EventEmitter<string>();

  emitEvent() {
    this.myEvent.emit('Event emitted from Child Component!');
  }
 
}
