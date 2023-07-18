import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject , ReplaySubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  state$:BehaviorSubject<any>=new BehaviorSubject<any>(null);
  sub!:Subject<any>;
  obs$!:Observable<any>;
  private behsub!:BehaviorSubject<any>
  behobs$!:Observable<any>;
  private replaySubject!:ReplaySubject<any>
  repObs$!: Observable<any>;
  
  constructor() { 
    this.sub=new Subject<any>();
    this.obs$= this.sub.asObservable();
    this.behsub=new BehaviorSubject<any>(1000);
    this.behobs$=this.behsub.asObservable();
    this.replaySubject=new ReplaySubject<number>(2);
    this.repObs$=this.replaySubject.asObservable();
  }

  sendReplay(data:any){
    this.replaySubject.next(data);
  }

  sendData(data:any){
    this.sub.next(data);
  }

  sendBehData(data:any){
    this.behsub.next(data);
  }

  public sendstate(data:any){
    this.state$.next(data);
  }

  public get getState(){
    return this.state$.getValue();
  }

}
