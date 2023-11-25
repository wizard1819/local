import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  sub$:BehaviorSubject<any> = new BehaviorSubject<any>(null);

  public setState(data?:any){
    this.sub$.next(data);
  }

  public get state(){
    return this.sub$.getValue();
  }
  constructor() { }
}
