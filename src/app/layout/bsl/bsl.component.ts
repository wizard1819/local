import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-bsl',
  templateUrl: './bsl.component.html',
  styleUrls: ['./bsl.component.css']
})
export class BslComponent {

  constructor(
    private service :LoginService,
    private bs : MatBottomSheetRef<BslComponent>
  ){}


  signOut(){
    this.service.signOut();
    this.bs.dismiss();
  }
}
