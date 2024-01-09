import { Component, OnInit, HostListener } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent {


  a = new Date();
  b = new Date(2010, 1, 23);
  constructor(
    private service: TestService
  ) {
    console.log(this.a, this.b);
    console.log(this.dateDiffInYears(this.b, this.a));

  }

  dateDiffInYears(dateold?: any, datenew?: any) {
    var ynew = datenew.getFullYear();
    var mnew = datenew.getMonth();
    var dnew = datenew.getDate();
    var yold = dateold.getFullYear();
    var mold = dateold.getMonth();
    var dold = dateold.getDate();
    var diff = ynew - yold;
    if (mold > mnew) { diff--; }
    else {
      if (mold == mnew) {
        if (dold > dnew) { diff--; }
      }
    }
    return diff;
  }

}
