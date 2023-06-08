import { Component , Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UntypedFormControl,UntypedFormGroup,Validators } from '@angular/forms';
import { FoodService } from '../food.service';
@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit{
  public form : UntypedFormGroup = Object.create(null);
  constructor( 
    private dialogRef : MatDialogRef<AddFoodComponent>,
    private service : FoodService,
    @Inject (MAT_DIALOG_DATA) public data :any
  ){
    this.dialogRef.updateSize("50vw","auto");
  }

  ngOnInit(): void {
    this.form = new UntypedFormGroup({
      name : new UntypedFormControl(null, [
        Validators.required,
      ]),
      isavailable : new UntypedFormControl(null, [
        Validators.required,
      ]),
      noOfSeats : new UntypedFormControl(null, [
        Validators.required,
      ]),
      outletId : new UntypedFormControl(null, [
        Validators.required,
      ]),
      waiterId : new UntypedFormControl(null, [
        Validators.required,
      ]),
     
    })
   
  }

  submit(){
    if(this.form.valid){
      const body = this.form.value;
      this.service.foodadd(this.form.value).subscribe({
        next : (response) =>{
          console.log(response);
          console.log('added successfully');
        },
        error: (e)=>{
          console.log(e);
          console.log(this.form.value);
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
