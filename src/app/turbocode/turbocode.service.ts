import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TurbocodeService {
  private countSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  count:any=0;
  constructor() { }

 
}
