import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VehicleService } from '../vehicle.service';
import { UntypedFormControl,UntypedFormGroup,Validators } from '@angular/forms';
import { SnackbarService } from 'src/app/snackbar/snackbar.service';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.css']
})
export class UpdateDialogComponent implements OnInit{


  isEdit:boolean=false;
  public form : UntypedFormGroup = Object.create(null);
  constructor( 
    private dialogRef : MatDialogRef<UpdateDialogComponent>,
    private service : VehicleService,
    private snackbar : SnackbarService,
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
   this.populateDataOnEdit()
  }
  populateDataOnEdit(){
    if(this.data){
      this.isEdit=true
      if(this.form.controls!=undefined && this.form.controls!=null){
        Object.keys(this.form.controls).forEach(key => {
          if(this.form.controls[key]!=undefined  && this.form.controls[key]!=null){
            this.form.controls[key].setValue(this.data[key] || this.data['address'][key]);
          }
        })
      }
    }
  }
 

  submit(){
    if(this.form.valid){
      this.getFunction().subscribe({
        next : (d) =>{
          this.snackbar.show(d.message);
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

  getFunction(){
    return (this.isEdit!==true)?  this.service.add(this.form.value): this.service.update(this.data.id,this.form.value)
  }
}
