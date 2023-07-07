import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CycleService {

  private countSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public count$ = this.countSubject.asObservable();

  constructor() { }

  incrementCount(): void {
    const currentCount = this.countSubject.value;
    this.countSubject.next(currentCount + 1);
    console.log(this.countSubject,'sub');
  }

  decrementCount(): void {
    const currentCount = this.countSubject.value;
    this.countSubject.next(currentCount - 1);
  }
}


