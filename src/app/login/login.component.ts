import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { SnackbarService } from '../snackbar/snackbar.service';
import { LoginService } from './login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  showPassword: boolean = false;
  public form: UntypedFormGroup = Object.create(null);
  tok: any;
  us = 'xoxo';
  pass = 'xoxo';
  formSubmitted: boolean = false;
  loader$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(

    private service: LoginService,
    private snackBar: SnackbarService,
    private snack: MatSnackBar,
    private router: Router
  ) {

    console.log(localStorage.getItem('token-local-app'), 'tokenss');
    this.tok = localStorage.getItem('token-local-app');
    if (this.tok == 'xyz123' && this.tok != null && this.tok != undefined) {
      this.router.navigate(['/home']);
    } else {
        this.loader$.next(true);
    }
  }



  toggleShow() {
    this.showPassword = !this.showPassword;
  }
  login() {
    if (this.form.valid) {
      this.service.check(this.form.value);
    } else {
      // this.snackBar.show('UserName and Password is Required');
      this.snack.open('UserName and Password is Required', 'Close', {
        panelClass: 'custo'
      });
    }




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
