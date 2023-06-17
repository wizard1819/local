import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Form, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(
    private router : Router
  ){}
  username!:string;
  password!:string;

  login() {
    if (this.username === 'guna' && this.password === '1234') {
      this.router.navigate(['']);
      console.log(this.username, this.password);
     
    } else {
      console.log('error');
      console.log(this.username, this.password);
    }
  }

  ngOnInit(): void {
   
  }



}
