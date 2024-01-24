import { Component , OnInit, Renderer2 } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import {ChangeDetectorRef,OnDestroy,AfterViewInit} from '@angular/core';
import { ThemeService } from 'src/app/theme/theme.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BslComponent } from '../bsl/bsl.component';
@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.css']
})
export class FullComponent implements OnInit, AfterViewInit {
  // colorr="black"
  public currentTheme!: any;
mykey:any;
  colorrr:any={bg:'gray',nav:'black',sb:'lightgrey'}

  items : any;
  jsonobj : any;
  publicRoute: boolean = false;
  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private service : ThemeService,
    private _router : Router,
    private renderer : Renderer2,
    private logout : LoginService,
    private bs : MatBottomSheet
  ){
     this.jsonobj = localStorage.getItem('current-user');
    this.items = JSON.parse(this.jsonobj);
   }
 
  ngAfterViewInit() {}
  opened=true;

  togglesidebar(){
    this.opened = ! this.opened;
  }
  public ngOnInit(): void {
    this.service.loadPersistedTheme();
    this.service.color$.subscribe((res)=>{
      this.currentTheme=res;
    })
  }

  public setTheme(theme: string): void {
    this.currentTheme = theme;
    this.service.setCurrentTheme(theme);
  }

 
  signout(){
    this.logout.signout();
  }
 


 


  logOut(){
    this.bs.open(BslComponent);
  }

}
