import { Component , Input, Output, EventEmitter} from '@angular/core';
import { CartService } from '../cart/cart.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() product:  undefined;
  @Output() notify = new EventEmitter();

  constructor(){}
}
