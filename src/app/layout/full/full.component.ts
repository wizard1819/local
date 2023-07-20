import { Component , OnInit, Renderer2 } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import {ChangeDetectorRef,OnDestroy,AfterViewInit} from '@angular/core';
import { ThemeService } from 'src/app/theme/theme.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';
@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.css']
})
export class FullComponent implements OnInit, AfterViewInit {
  // colorr="black"
  public currentTheme!: string;
mykey:any;
  colorrr:any={bg:'gray',nav:'black',sb:'lightgrey'}

  publicRoute: boolean = false;
  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private service : ThemeService,
    private _router : Router,
    private renderer : Renderer2,
    private logout : LoginService
  ){
   
   
  }
 
  ngAfterViewInit() {}
  opened=true;

  togglesidebar(){
    this.opened = ! this.opened;
  }
  public ngOnInit(): void {
    this.service.loadPersistedTheme();
    this.currentTheme = this.service.getCurrentTheme();
  }

  public setTheme(theme: string): void {
    this.currentTheme = theme;
    this.service.setCurrentTheme(theme);
  }

 
  signout(){
    this.logout.signout();
  }
 


  theme(){
    this.renderer.setStyle(document.body, 'background-color', 'red');
    
  }
}
