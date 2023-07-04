import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showPassword: boolean = false;
  public form: UntypedFormGroup = Object.create(null);

  us='xoxo';
  pass='xoxo';
  formSubmitted: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: LoginService
  ) { }



  toggleShow() {
    this.showPassword = !this.showPassword;
  }
  login() {
    console.log(this.form.value);
    this.service.check(this.form.value).subscribe((data:any)=>{
      console.log(data,'hloo');
    });

  }

  ngOnInit(): void {
     this.form = new UntypedFormGroup({
      userName: new UntypedFormControl(null, [
        Validators.required,
        // Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
      ]),
      password: new UntypedFormControl(null, [
        Validators.required,
        // Validators.pattern("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$")
      ]),
    });

    // this.form.disable();
  }



}
