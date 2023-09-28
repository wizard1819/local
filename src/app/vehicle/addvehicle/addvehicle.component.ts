import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';
import { FormControl, FormGroup, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { GlobalstateService } from 'src/app/globalService/globalstate.service';
import { SnackbarService } from 'src/app/snackbar/snackbar.service';

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
    private router: Router,
    private globalstate: GlobalstateService,
    private snackbar : SnackbarService

  ) {
  }

  vehicle={model:'rapid',brand:'skoda',owner:'guna',status:"true",type:'Car',registerNum:3435, name:{
    name:'guna',
    gender:'male',
    age:20,
    single:{life:12,years:'years',range:30}
  }};

  ngOnInit() {
    if (this.globalstate.state != null && this.globalstate.state != undefined) {
      this.receivedData = this.globalstate.state;
      console.log(this.receivedData,'received');
    }


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
      name:new FormGroup({
        name:new FormControl(),
        age:new FormControl(),
        gender:new FormControl(),
        single:new FormGroup({
          life:new FormControl(),
          range:new FormControl(),
          years:new FormControl()
        })
      })
    })
    console.log('dialog data', this.receivedData);
    this.populateDataOnEdit();
  }

  populateDataOnEdit() {
   this.form.patchValue(this.vehicle);
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
    console.log(this.form.value,'values');
    // if (this.form.valid) {
    //   this.service.update(this.receivedData.id, this.form.value).subscribe({
    //     next: (d:any) => {
    //       console.log(d,'ress');
    //       this.snackbar.show(d.message);
    //     },
    //     error: (e) => {
    //       console.log(e);
    //     },
    //     complete: () => {
    //       this.router.navigate(['/bike']);
    //     }
    //   })
    // } else {
    //   console.log(this.form.errors);
    // }
  }
}
