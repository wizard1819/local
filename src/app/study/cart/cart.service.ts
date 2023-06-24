import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  items:any[]=[];
  item=[];
  constructor() { }

  addtocart(product:any){
    console.log(product);
    this.items.push(product);
  }

 get getitems(){
  console.log(this.items);
    return this.items;
  }
  

   clearCart() {
    console.log(this.items);
   this.items.pop;
   console.log(this.items);
  return this.items;


   
  }
  
}
