import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalstateService {

  constructor() { }

  private status$= new BehaviorSubject<any>("");
  private state$ = new BehaviorSubject<any>("");

  public get state(): string {
    return this.state$.getValue();
  }

  public setState(newState: string) {
    this.state$.next(newState);
  }

  public setstatus(newstatus:any){
    this.status$.next(newstatus);
  }

  public get status():string{
    return this.status$.getValue();
  }

  set accesstoken(token:string){
    localStorage.setItem('accesstoken', token);
  }

  get accesstoken(){
  return  localStorage.getItem('accesstoken') ?? '';
  }

}
