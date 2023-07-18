import { Component, Input, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-dynamicform',
  templateUrl: './dynamicform.component.html',
  styleUrls: ['./dynamicform.component.css']
})
export class DynamicformComponent {

  dynamicForm!: FormGroup;
  formFields: string[] = ['name', 'age', 'gender', 'firstname', 'lastname', 'mobilenumber'];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.dynamicForm = this.formBuilder.group({});
    this.generateFormControls();
  }

  generateFormControls() {
    this.formFields.forEach(fieldName => {
      this.dynamicForm.addControl(fieldName, this.formBuilder.control('', Validators.required));
    });
  }

  // Helper method to get form control's value easily
  get f() {
    return this.dynamicForm.controls;
  }

  onSubmit() {
    if (this.dynamicForm.invalid) {
      return;
    }

    // Handle form submission
    console.log(this.dynamicForm.value);
  }
}
