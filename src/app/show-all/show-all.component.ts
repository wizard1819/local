import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css']
})
export class ShowAllComponent {

  @Input() public name:any;
  @Input() public age:any;
  @Input() public gender:any;
}
