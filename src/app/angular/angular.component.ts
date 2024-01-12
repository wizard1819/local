import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
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
export class AngularComponent implements OnInit ,AfterViewInit {

  data: any = { name: 'arun', age: 21 };
  public form: UntypedFormGroup = Object.create(null);
  message = "I'm read only!";
  canEdit = false;
  fontColor = 'blue';
  sayHelloId = 0;

  parts :any='oader';

  onEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message = 'You can edit me!';
    } else {
      this.message = "I'm read only!";
    }
  }


  constructor(
    private ref : ElementRef
  ){}
  ngOnInit(): void {
   
    this.form = new UntypedFormGroup({
      name: new UntypedFormControl(null, [Validators.required]),
      age: new UntypedFormControl(null, [Validators.required]),
    })
    this.populate();
  }
  ngAfterViewInit() {
    // Create a new element using document.createElement
    const newElement = document.createElement('p');
    newElement.className = 'oader';
    console.log(newElement);
    // Append the new element to the dynamicElement div in the template
    this.ref.nativeElement.querySelector('div','#load').appendChild(newElement);
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
