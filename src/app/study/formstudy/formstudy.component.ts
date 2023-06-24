import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-formstudy',
  templateUrl: './formstudy.component.html',
  styleUrls: ['./formstudy.component.css']
})
export class FormstudyComponent {

  constructor(
    private formBuilder: FormBuilder,
  ) {}
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });
}
