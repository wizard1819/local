import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formone',
  templateUrl: './formone.component.html',
  styleUrls: ['./formone.component.css']
})
export class FormoneComponent  implements OnInit{
  dynamicForm!: FormGroup;
  formConfig = [
    { type: 'text', label: 'Name', name: 'name', required: true },
    { type: 'number', label: 'Age', name: 'age', required: true },
    { type: 'email', label: 'Email', name: 'email', required: true },
    // { type: 'checkbox', label: 'Subscribe to Newsletter', name: 'subscribe' },
    {
      type: 'dropdown',
      label: 'Country',
      name: 'country',
      options: ['USA', 'Canada', 'UK', 'Australia'],
      required: true
    },
    // {
    //   type: 'select',
    //   label: 'Gender',
    //   name: 'gender',
    //   options: ['Male', 'Female', 'Other'],
    //   required: true
    // }
  ];

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    const formGroup:any=[]
    for (const field of this.formConfig) {
      const validators = field.required ? [Validators.required] : [];
      formGroup[field.name] = new FormControl('', validators);
    }
    this.dynamicForm = new FormGroup(formGroup);
  }

  onSubmit() {
    if (this.dynamicForm.valid) {
      console.log('Form submitted:', this.dynamicForm.value);
      // Perform further actions like sending data to the server, etc.
    } else {
      console.log('Form is invalid. Please check the fields.');
    }
  }
}
