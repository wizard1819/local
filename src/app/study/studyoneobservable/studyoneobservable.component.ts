import { Component } from '@angular/core';
import { Observable, fromEvent, of } from 'rxjs';
@Component({
  selector: 'app-studyoneobservable',
  templateUrl: './studyoneobservable.component.html',
  styleUrls: ['./studyoneobservable.component.css']
})
export class StudyoneobservableComponent {

  rem$ :any;
  constructor(
    
  ){
   const key$ = new Observable((subscribe)=>{
    subscribe.next('1')
    subscribe.next('2')
    subscribe.next('3')
    subscribe.error('hello');
    subscribe.complete();
    subscribe.next('4');
   })
   key$.subscribe((x)=>{
    console.log(x);
   })
   this.rem$= this.fromEvent(document.body,'click').subscribe(x=>{
      console.log('clickedd');
    })
  }

   fromEvent<T extends keyof HTMLElementEventMap>(target: HTMLElement, eventName: T) {
    return new Observable<HTMLElementEventMap[T]>((observer) => {
      const handler = (e: HTMLElementEventMap[T]) => observer.next(e);
  
      // Add the event handler to the target
      target.addEventListener(eventName, handler);
  
      return () => {
        // Detach the event handler from the target
        target.removeEventListener(eventName, handler);
        console.log('removed');
      };
    });
  }


  remove(){
    this.rem$.unsubscribe();
  }

  hello():Observable<any>{
    console.log('helo');
    return of(true);
  }
}
