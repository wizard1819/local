import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, ViewChild, inject, OnInit} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatIconModule} from '@angular/material/icon';
import {NgFor, AsyncPipe} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { UntypedFormControl, UntypedFormGroup, } from '@angular/forms';

@Component({
  selector: 'app-chips3',
  templateUrl: './chips3.component.html',
  styleUrls: ['./chips3.component.css']
})
export class Chips3Component implements OnInit{
  public form: UntypedFormGroup = Object.create(null);
  color:any='primary';
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl('');
  filteredFruits: Observable<string[]>;
  fruits: string[] = [];
  allFruits: string[] = ['guna', 'velu', 'rathees', 'praveen', 'vinoth','arnesh','jaga','krishna'];
  tablevalues:any=null;

  @ViewChild('fruitInput') fruitInput!: ElementRef<HTMLInputElement>;

  announcer = inject(LiveAnnouncer);

  constructor() {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allFruits.slice())),
    );
  }

  ngOnInit(): void {
    this.form = new UntypedFormGroup({
      names: new UntypedFormControl(null, [
      ]),})
  }
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);

      this.announcer.announce(`Removed ${fruit}`);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }

  submit(){
    this.tablevalues=this.form.value.names;
    console.log(this.tablevalues);;
  }
}
