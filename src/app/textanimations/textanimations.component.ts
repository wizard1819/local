import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-textanimations',
  templateUrl: './textanimations.component.html',
  styleUrls: ['./textanimations.component.css']
})
export class TextanimationsComponent implements OnInit {

  show: boolean = false;
  searchForm!: FormGroup
  constructor(
    private fb: FormBuilder
  ) {

  }

  name = { name: null, age: 10, firstname: 'guna', lastname: { name: 'guna', onre: null }, fn: { fn: null, gma: 'name' } };

  timee: any;
  ngOnInit(): void {
    this.searchForm = this.fb.group({
      runtime: new FormControl(),
    })

    this.searchForm.get('runtime')?.valueChanges.subscribe((res) => {
      if (res == 'now') {

        this.searchForm.addControl('name', new FormControl());
        this.searchForm.addControl('age', new FormControl());
        this.searchForm.removeControl('fname');
        this.searchForm.removeControl('lname');
        this.show = true
      } else if (res == 'later') {
        this.searchForm.addControl('fname', new FormControl());
        this.searchForm.addControl('lname', new FormControl());
        this.searchForm.removeControl('name');
        this.searchForm.removeControl('age');
        this.show = false;
      }
    })
  }



  check() {
    console.log(this.searchForm.value);
  }



}

