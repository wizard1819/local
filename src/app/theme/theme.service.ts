import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme: string = 'gray';

  public getCurrentTheme(): string {
    return this.currentTheme;
  }
  public setCurrentTheme(theme: string): void {
    this.currentTheme = theme;
    localStorage.setItem('currentTheme', theme); 
  }
 

  public loadPersistedTheme(): void {
    const persistedTheme = localStorage.getItem('currentTheme');
    if (persistedTheme) {
      this.currentTheme = persistedTheme;
    }
  }


  set token(tok:any){
    localStorage.setItem('token',tok);
  }

  get token(){
    return localStorage.getItem('token');
  }

}
