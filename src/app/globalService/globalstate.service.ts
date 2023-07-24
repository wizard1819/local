import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalstateService {

  constructor() { }

  private status$= new BehaviorSubject<any>("");
  private state$ = new BehaviorSubject<any>("");

  public get state(): any {
    return this.state$.getValue();
  }

  public setState(newState: any) {
    this.state$.next(newState);
  }

  public setstatus(newstatus:any){
    this.status$.next(newstatus);
  }

  public get status():string{
    return this.status$.getValue();
  }

 

}
