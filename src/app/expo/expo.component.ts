import { Component } from '@angular/core';
import { fromEvent, scan, interval, of, map, pipe, filter, reduce } from 'rxjs';

@Component({
  selector: 'app-expo',
  templateUrl: './expo.component.html',
  styleUrls: ['./expo.component.css']
})
export class ExpoComponent {

  names = [
    { id: 1, age: 10 },
    { id: 2, age: 10 },
    { id: 3, age: 20 },
    { id: 4, age: 10 },
    { id: 5, age: 20 },
    { id: 6, age: 20 },
    { id: 7, age: 20 },
  ]
  constructor() {
  
    const nums = of(this.names);

   const idss = this.names.filter(id => id.age>=20).map(id => id.id);
   console.log(idss, 'ide');
    nums.subscribe((res)=>{
      console.log(res);
    })

  nums.pipe(
    map(obj => obj.map((obj:any) => obj.id)),
    map(ids => ids.filter(ide => ide %2==0))
  ).subscribe((i)=> console.log(i));

  
  }

 

  accounts : any[] =[
    {id:1,name:'arun',money:500},
    {id:2,name:'bala',money:100},
    {id:3,name:'chand',money:200},
    {id:4,name:'darun',money:300},
    {id:5,name:'ees',money:1500},
    {id:6,name:'farzi',money:200},
    {id:7,name:'guna',money:780},
    {id:8,name:'hari',money:900},
    {id:9,name:'inn',money:2000},
    {id:10,name:'jaga',money:250},
    {id:11,name:'karthi',money:670},

  ]

  total(){

    const obb = of(this.accounts).pipe(
      map(obj=> obj.reduce((s,i)=> s +i.money,0))
    )
    obb.subscribe((i)=>{
      console.log(i)
    } );
   
    // const bo = this.accounts.filter(obj => obj.money>1000)
    // const obs = bo.reduce((sum, item)=> sum+ item.money,0);
    // console.log(obs);
  }
}
