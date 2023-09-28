import { Component, Input, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dynamicform',
  templateUrl: './dynamicform.component.html',
  styleUrls: ['./dynamicform.component.css']
})
export class DynamicformComponent {

  dynamicForm!: UntypedFormGroup;
  formFields: any[] = [
    { fieldName: 'name' },
    { fieldName: 'age' },
    { fieldName: 'gender' },
    { fieldName: 'mobileNum' },
    { fieldName: 'Address' },
    { fieldName: 'State' },
  ];

  constructor(private formBuilder: UntypedFormBuilder, private router: Router) { }

  ngOnInit() {
    this.dynamicForm = this.formBuilder.group({});
    this.generateFormControls();
    this.dynamicForm.valueChanges.subscribe((res)=>{
      
    })
  }

  generateFormControls() {
    this.formFields.forEach(field => {
      this.dynamicForm.addControl(field.fieldName, this.formBuilder.control('', Validators.required));
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



  canDeactivate() {
    if (this.dynamicForm.value.name.length<=1) {
      return true;
    }
    else {
      return new Promise((resolve, reject) => {
        resolve(confirm('Do you want to navigate??'));
      });
    }
  }
}
