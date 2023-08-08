import { Component , OnInit} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-bu',
  templateUrl: './bu.component.html',
  styleUrls: ['./bu.component.css']
})
export class BuComponent implements OnInit{

  tableForm!: FormGroup;

  names = [
    { name: 'guna', age: 10 },
  ];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initForm();
   
  }

  initForm() {
    this.tableForm = this.formBuilder.group({
      values: this.formBuilder.array([]),
    });
  }

  populateTableForm() {
    const valuesArray = this.tableForm.get('values') as FormArray;
    this.names.forEach((nameData) => {
      const nameGroup = this.formBuilder.group({
        name: new FormControl(nameData.name),
        age: new FormControl(nameData.age),
      });
      valuesArray.push(nameGroup);
    });
  }

  consoleValues() {
    this.populateTableForm();
    console.log(this.tableForm.value);
  }
}
