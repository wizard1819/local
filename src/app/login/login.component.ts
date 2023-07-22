import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { SnackbarService } from '../snackbar/snackbar.service';
import { LoginService } from './login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showPassword: boolean = false;
  public form: UntypedFormGroup = Object.create(null);

  us = 'xoxo';
  pass = 'xoxo';
  formSubmitted: boolean = false;
  constructor(

    private service: LoginService,
    private snackBar: SnackbarService,
    private snack : MatSnackBar
  ) {

  }



  toggleShow() {
    this.showPassword = !this.showPassword;
  }
  login() {
    if (this.form.valid) {
      this.service.check(this.form.value);
    }else{
      // this.snackBar.show('UserName and Password is Required');
      this.snack.open('UserName and Password is Required','Close');
    }

    // this.service.log.subscribe((data)=>{
    //   if(data==true){
    //     this.snackBar.show('Logged in Successfully!!');
    //   }else{
    //     this.snackBar.show('Invalid UserName/Password');
    //   }
    // })


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
