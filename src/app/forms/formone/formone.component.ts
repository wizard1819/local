import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GlobalstateService } from 'src/app/globalService/globalstate.service';



@Component({
  selector: 'app-formone',
  templateUrl: './formone.component.html',
  styleUrls: ['./formone.component.css']
})
export class FormoneComponent implements OnInit {
  dynamicForm!: FormGroup;
  formConfig: any[] = []
  isEdit: boolean = false
  constructor(
    private dialogRef: MatDialogRef<FormoneComponent>,
    private globalstate: GlobalstateService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  async ngOnInit() {
    if (this.globalstate.state != null && this.globalstate.state != undefined) {
      this.formConfig = this.globalstate.state;
      console.log(this.data, 'received');
    }
    await this.createForm();
  }

  createForm() {
    const formGroup: any = []
    for (const field of this.formConfig) {
      const validators = field.required ? [Validators.required] : [];
      formGroup[field.name] = new FormControl('', validators);
    }
    this.dynamicForm = new FormGroup(formGroup);
    this.populateDataOnEdit();
  }

  populateDataOnEdit() {
    if (this.data) {
      this.isEdit = true
      if (this.dynamicForm.controls != undefined && this.dynamicForm.controls != null) {
        Object.keys(this.dynamicForm.controls).forEach(key => {
          if (this.dynamicForm.controls[key] != undefined && this.dynamicForm.controls[key] != null) {
            this.dynamicForm.controls[key].setValue(this.data[key] || this.data['address'][key]);
          }
        })
      }
    }
  }

  onSubmit() {
    if (this.dynamicForm.valid) {
      this.dialogRef.close({
        data: this.dynamicForm.value
      })
    }
  }
}
