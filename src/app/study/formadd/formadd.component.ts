import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formadd',
  templateUrl: './formadd.component.html',
  styleUrls: ['./formadd.component.css']
})
export class FormaddComponent {
  mainForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.mainForm = this.formBuilder.group({
      // Other form controls can go here if needed
      form: this.formBuilder.array([])
    });
  }

  // Helper method to access the form array
  get form(): FormArray {
    return this.mainForm.get('form') as FormArray;
  }

  // Add a new form control to the form array
  addFormControl() {
    this.form.push(this.formBuilder.control(name, Validators.required));
  }

  // Remove a form control from the form array
  removeFormControl(index: number) {
    this.form.removeAt(index);
  }

  // Get the form control at the specified index
  getFormControl(index: number): FormControl {
    return this.form.at(index) as FormControl;
  }

  submit(){
    console.log(this.mainForm.value);
  }
}
