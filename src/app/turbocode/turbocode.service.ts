import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TurbocodeService {

  count:any=0;
  constructor() { }

  incrementCOunt(count:any){
    count=this.count++;
  }

  getCount(count:any){
    return this.count;
  }
}
