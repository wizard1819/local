import { Component , OnInit, Renderer2 } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import {ChangeDetectorRef,OnDestroy,AfterViewInit} from '@angular/core';
import { ThemeService } from 'src/app/theme/theme.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.css']
})
export class FullComponent implements OnInit,  OnDestroy, AfterViewInit {
  // colorr="black"
  public currentTheme!: string;
  mobileQuery: MediaQueryList;
mykey:any;
  colorrr:any={bg:'gray',nav:'black',sb:'lightgrey'}

  private _mobileQueryListener: () => void;
  publicRoute: boolean = true;
  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private service : ThemeService,
    private _router : Router,
    private renderer : Renderer2
  ){
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    localStorage.setItem('this.mykey', JSON.stringify(this.colorrr));
    let mk=localStorage.getItem('this.myey');
  
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  ngAfterViewInit() {}
  opened=true;

  togglesidebar(){
    this.opened = ! this.opened;
  }
  public ngOnInit(): void {
    this.service.loadPersistedTheme();
    this.currentTheme = this.service.getCurrentTheme();
    console.log(this.currentTheme);
  }

  public setTheme(theme: string): void {
    this.currentTheme = theme;
    this.service.setCurrentTheme(theme);
  }

 
  ngDoCheck(): void {
  if(this._router.url === '/login' && !this.publicRoute){
    this._router.navigate(['/user']);
  }
  }
 


  theme(){
    this.renderer.setStyle(document.body, 'background-color', 'red');
    
  }
}
