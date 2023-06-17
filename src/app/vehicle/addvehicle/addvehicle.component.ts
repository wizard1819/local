import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-addvehicle',
  templateUrl: './addvehicle.component.html',
  styleUrls: ['./addvehicle.component.css']
})
export class AddvehicleComponent implements OnInit {


  receivedData: any;
  public form: UntypedFormGroup = Object.create(null);
  constructor(
    private service: VehicleService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const data = JSON.parse(params['vehicles']);
      this.receivedData = data;
    });


    this.form = new UntypedFormGroup({
      model: new UntypedFormControl(null, [
        Validators.required,
      ]),
      brand: new UntypedFormControl(null, [
        Validators.required,
      ]),
      owner: new UntypedFormControl(null, [
        Validators.required,
      ]),
      status: new UntypedFormControl(null, [
        Validators.required,
      ]),
      type: new UntypedFormControl(null, [
        Validators.required,
      ]),
      registerNum: new UntypedFormControl(null, [
        Validators.required,
      ]),
    })
    console.log('dialog data', this.receivedData);
    this.populateDataOnEdit();
  }

  populateDataOnEdit() {
    if (this.receivedData) {
      if (this.form.controls != undefined && this.form.controls != null) {
        Object.keys(this.form.controls).forEach(key => {
          console.log(key,'key');
          if (this.form.controls[key] != undefined && this.form.controls[key] != null) {
            this.form.controls[key].setValue(this.receivedData[key] || this.receivedData['address'][key]);
            console.log(this.form.controls[key].setValue(this.receivedData[key] || this.receivedData['address'][key]))
          }
        })
      }
    }
  }

  showdataonedit(){
    if(this.receivedData){
      if(this.form.controls!=undefined && this.form.controls!=null){
        Object.keys(this.form.controls).forEach(k=>{
          if(this.form.controls[k]!=null && this.form.controls[k]!=undefined){
            
          }
        })
      }
    }
  }

  submit() {
    if (this.form.valid) {
      this.service.update(this.receivedData.id, this.form.value).subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (e) => {
          console.log(e);
        },
        complete: () => {
          this.router.navigate(['/bike']);
        }
      })
    } else {
      console.log(this.form.errors);
    }
  }
}
