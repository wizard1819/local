import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme: any = {h:'black',s:'red',c:'gray'};

  color$ : BehaviorSubject<any> = new BehaviorSubject<any>(this.currentTheme);
  persistedTheme:any;
  public getCurrentTheme(): string {
    return this.currentTheme;
  }
  public setCurrentTheme(theme: any): void {
    this.currentTheme = theme;
    localStorage.setItem('currentTheme', JSON.stringify(theme)); 
  }
 

  public loadPersistedTheme(): void {
     this.persistedTheme = localStorage.getItem('currentTheme');
      if (this.persistedTheme) {
      this.currentTheme = JSON.parse(this.persistedTheme);
      this.color$.next(this.currentTheme);
    }
  }


 

}
