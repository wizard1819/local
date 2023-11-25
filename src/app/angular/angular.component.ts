import { Component, OnInit } from '@angular/core';
import { FormControl, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { VehicleService } from '../vehicle/vehicle.service';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

  data: any = { name: 'arun', age: 21 };
  public form: UntypedFormGroup = Object.create(null);
  message = "I'm read only!";
  canEdit = false;
  fontColor = 'blue';
  sayHelloId = 0;

  onEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message = 'You can edit me!';
    } else {
      this.message = "I'm read only!";
    }
  }
  ngOnInit(): void {
    this.form = new UntypedFormGroup({
      name: new UntypedFormControl(null, [Validators.required]),
      age: new UntypedFormControl(null, [Validators.required]),
    })
    this.populate();
  }


  
  submit() {
    console.log(this.form.value);
  }

  populate() {
    if (this.data) {
      Object.keys(this.form.controls).forEach(key => {
        this.form.controls[key].setValue(this.data[key]);
      })
    }
  }



}
