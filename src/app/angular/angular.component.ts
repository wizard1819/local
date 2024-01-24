import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith, take } from 'rxjs/operators';
import { VehicleService } from '../vehicle/vehicle.service';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent{

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

  ab :any;

  constructor(
    private ref : ElementRef,
    private fb : FormBuilder
  ){}

  names =[
    {name:'guna',age:20,gender:'Male'},
    {name:'guna',age:20,gender:'Male'},
    {name:'guna',age:20,gender:'Male'},
    {name:'guna',age:20,gender:'Male'},
    {name:'guna',age:20,gender:'Male'},
    {name:'guna',age:20,gender:'Male'},
  ]
  rad!:FormGroup;
  ngOnInit(): void {
    this.rad =this.fb.group({
      nms : [false]
    });
   this.ab = new Observable((sub)=>{
    sub.next(1);
   });
   this.ab.pipe(take(2)).subscribe((r:any)=> console.log(r));
  }


}
