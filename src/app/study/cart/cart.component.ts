import { Component } from '@angular/core';
import { CartService } from './cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

 constructor(
  private cart : CartService
 ){}

 addtocart(data?:any){
  this.cart.addtocart(data);
 }
}
