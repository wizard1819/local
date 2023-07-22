import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, inject, OnInit} from '@angular/core';
import {MatChipEditedEvent, MatChipInputEvent} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {NgFor} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { UntypedFormControl, UntypedFormGroup, } from '@angular/forms';


export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-chips2',
  templateUrl: './chips2.component.html',
  styleUrls: ['./chips2.component.css']
})
export class Chips2Component implements OnInit{

  foods: any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  public form: UntypedFormGroup = Object.create(null);

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Fruit[] = [];

  announcer = inject(LiveAnnouncer);


  ngOnInit(): void {
    this.form = new UntypedFormGroup({
      names: new UntypedFormControl(null, [
      ]),})
  }
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);

      this.announcer.announce(`Removed ${fruit}`);
    }
  }

  edit(fruit: Fruit, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove fruit if it no longer has a name
    if (!value) {
      this.remove(fruit);
      return;
    }

    // Edit existing fruit
    const index = this.fruits.indexOf(fruit);
    if (index >= 0) {
      this.fruits[index].name = value;
    }
  }

  submit(){
    console.log(this.form.value);
  }
}
