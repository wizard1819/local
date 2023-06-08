import { Component , Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VehicleService } from '../vehicle.service';
import { UntypedFormControl,UntypedFormGroup,Validators } from '@angular/forms';


@Component({
  selector: 'app-vehicle-dialog',
  templateUrl: './vehicle-dialog.component.html',
  styleUrls: ['./vehicle-dialog.component.css']
})
export class VehicleDialogComponent implements OnInit{
  public form : UntypedFormGroup = Object.create(null);
  constructor( 
    private dialogRef : MatDialogRef<VehicleDialogComponent>,
    private service : VehicleService,
    @Inject (MAT_DIALOG_DATA) public data :any
  ){
    this.dialogRef.updateSize("50vw","auto");
  }

 
  ngOnInit(): void {
    this.form = new UntypedFormGroup({
      model : new UntypedFormControl(null, [
        Validators.required,
      ]),
       brand : new UntypedFormControl(null, [
        Validators.required,
      ]),
       owner : new UntypedFormControl(null, [
        Validators.required,
      ]),
       status : new UntypedFormControl(null, [
        Validators.required,
      ]),
       type : new UntypedFormControl(null, [
        Validators.required,
      ]),
       registerNum : new UntypedFormControl(null, [
        Validators.required,
      ]),
    })
   
  }

 

  submit(){
    if(this.form.valid){
      const body = this.form.value;
      this.service.add(body).subscribe({
        next : (response) =>{
          console.log(response);
        },
        error: (e)=>{
          console.log(e);
        },
        complete : ()=>{
          this.dialogRef.close();
        }
      })
    }else{
      console.log(this.form.errors);
    }
  }
 
 
}
