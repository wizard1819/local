import { Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { map, pairwise, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScrollbarService {

  private scrollSubject: Observable<Event>;

  constructor() {
    this.scrollSubject = fromEvent(window, 'scroll');
  }

  observeScrollToBottom(): Observable<boolean> {
    return this.scrollSubject.pipe(
      map(() => this.isScrollbarAtBottom()),
      filter(atBottom => atBottom)
    );
  }

  private isScrollbarAtBottom(): boolean {
    const body = document.body;
    const html = document.documentElement;
  
  
    const documentHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
  
    const windowHeight = window.innerHeight;
  
    // Calculate the scroll position based on the type of browser
    const scrollPosition = (window.scrollY !== undefined) ? window.scrollY : window.pageYOffset;

    
    // Check if there's a vertical scrollbar and if it's scrolled to the bottom
    return (scrollPosition + windowHeight)+2 >= documentHeight;
  }
}
