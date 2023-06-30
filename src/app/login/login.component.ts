import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showPassword: boolean = false;

  us='guna';
  pass='1234';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: LoginService
  ) { }
  checkoutForm = this.formBuilder.group({
    name: '',
    password: ''
  });

  toggleShow() {
    this.showPassword = !this.showPassword;
  }
  login() {
    console.log(this.checkoutForm.value);
    this.service.check(this.checkoutForm.value);

  }

  ngOnInit(): void {
    console.log(localStorage.getItem('token'), 'ontoken');
  }



}
