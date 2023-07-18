import { Component, Input, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators , UntypedFormBuilder, UntypedFormGroup} from '@angular/forms';
@Component({
  selector: 'app-dynamicform',
  templateUrl: './dynamicform.component.html',
  styleUrls: ['./dynamicform.component.css']
})
export class DynamicformComponent {

  dynamicForm!: UntypedFormGroup;
  formFields: string[] = ['name', 'age', 'gender', 'mobilenumber','type'];

  constructor(private formBuilder: UntypedFormBuilder) { }

  ngOnInit() {
    this.dynamicForm = this.formBuilder.group({});
    this.generateFormControls();
  }

  generateFormControls() {
    this.formFields.forEach(fieldName => {
      console.log(fieldName);
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
