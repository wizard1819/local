import { Component, OnInit, DoCheck } from '@angular/core';
import { CartService } from './cart.service';
import { skip } from 'rxjs';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  panelOpenState = false;
  cartsss:any;
  product:any;
 constructor(
  private cart : CartService
 ){}

 addtocart(data?:any){
  this.cart.addtocart(data);
  this.product='';
 }

 ngOnInit(): void {
  
 }


 finda(){
   this.cartsss= this.cart.getitems;
 
}


clearcart(){
  this.cart.items=[];
}
 
}
