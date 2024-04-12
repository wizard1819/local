import { Component, HostListener } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { BsComponent } from './bs/bs.component';
import { LoginService } from 'src/app/login/login.service';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  //sidenav
  opened = true;

  contentHeight!: string;
  //constructor
  constructor(
    private _bottomSheet: MatBottomSheet,
    private login: LoginService
  ) {
    this.updateContentHeight();
  }
  //bottom sheet
  openBottomSheet() {
    this._bottomSheet.open(BsComponent);
  }

  //togglesidebar
  togglesidebar() {
    this.opened = !this.opened;

  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateContentHeight();
  }

  private updateContentHeight() {
    if (window.innerWidth >= 768) {
      this.contentHeight = 'calc(100vh - 64px)';
    } else {
      this.contentHeight = 'calc(100vh - 56px)';
    }
  }

  logOut() {
    this.login.signOut();
  }

}


