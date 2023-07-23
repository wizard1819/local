import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bs',
  templateUrl: './bs.component.html',
  styleUrls: ['./bs.component.css']
})
export class BsComponent {
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<BsComponent>,
    private router : Router
    ) {}

  switch(){
    this.router.navigate(['/home']);
    this._bottomSheetRef.dismiss();
  }
}
