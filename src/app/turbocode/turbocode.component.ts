import { Component , OnInit, ViewEncapsulation} from '@angular/core';
import { TurbocodeService } from './turbocode.service';
@Component({
  selector: 'app-turbocode',
  templateUrl: './turbocode.component.html',
  styleUrls: ['./turbocode.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class TurbocodeComponent {
  constructor(private toastService: TurbocodeService) {}
  
  show() {
    this.toastService.show('This is a toast message.');
  }
  }

