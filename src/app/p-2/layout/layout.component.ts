import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { BsComponent } from './bs/bs.component';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  //sidenav
  opened=false;

  //constructor
  constructor(
    private _bottomSheet: MatBottomSheet,
  ){
   
  }
 //bottom sheet
  openBottomSheet() {
    this._bottomSheet.open(BsComponent);
  }

  //togglesidebar
  togglesidebar(){
    this.opened = ! this.opened;
  }

}


