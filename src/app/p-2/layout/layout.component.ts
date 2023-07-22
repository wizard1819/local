import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  //sidenav
  opened=true;

  //constructor
  constructor(
    private _bottomSheet: MatBottomSheet,
  ){
   
  }
 //bottom sheet
  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }

  //togglesidebar
  togglesidebar(){
    this.opened = ! this.opened;
  }

}


@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom.html',
})
export class BottomSheetOverviewExampleSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}