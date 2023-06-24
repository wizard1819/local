import { Component, inject , OnInit} from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { UntypedFormControl, UntypedFormGroup, } from '@angular/forms';
@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css']
})
export class ChipsComponent implements OnInit {
  keywords=[''];
  public form: UntypedFormGroup = Object.create(null);
  announcer = inject(LiveAnnouncer);

  ngOnInit(): void {
    this.form = new UntypedFormGroup({
      formControl: new UntypedFormControl(null, [
      ]),})
  }


  removeKeyword(keyword: string) {
    const index = this.keywords.indexOf(keyword);
    if (index >= 0) {
      this.keywords.splice(index, 1);

      this.announcer.announce(`removed ${keyword}`);
    }
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our keyword
    if (value) {
      this.keywords.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  submit(){
    console.log(this.form.value);
  }
}
