import { Component , Input, Output, EventEmitter} from '@angular/core';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() product:  undefined;
  @Output() notify = new EventEmitter();

  user=[
    {name:'guna',gender:'male'},
    {name:'guna',gender:'male'},
    {name:'guna',gender:'male'},
    {name:'guna',gender:'male'},
    {name:'xxx',gender:'female'},
    {name:'xxx',gender:'female'},
    {name:'xxx',gender:'female'},
    {name:'xxx',gender:'female'},
    {name:'xxx',gender:'female'},
    {name:'xxx'},
    {name:'xxx'},
    {name:'xxx'},
    {name:'xxx'},
  ]
  constructor(){}
}
