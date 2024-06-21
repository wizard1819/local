import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LOCAL_APP } from '../common/common';
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  
  private currentTheme: any = {h:'#0a0a0b',s:'#3a3a3b',c:'#ed5b0c',hh:'#FFFFFF',hs:'#FFFFFF',hc:'#FFFFFF'};

  color$ : BehaviorSubject<any> = new BehaviorSubject<any>(this.currentTheme);
  persistedTheme:any;
  public getCurrentTheme(): string {
    return this.currentTheme;
  }
  public setCurrentTheme(theme: any): void {
    this.currentTheme = theme;
    localStorage.setItem(LOCAL_APP.THEME, JSON.stringify(theme)); 
    this.color$.next(theme);
  }
 

  public loadPersistedTheme(): void {
     this.persistedTheme = localStorage.getItem(LOCAL_APP.THEME);
      if (this.persistedTheme) {
      this.currentTheme = JSON.parse(this.persistedTheme);
      this.color$.next(this.currentTheme);
    }
  }


 

}
