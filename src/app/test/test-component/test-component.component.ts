import { Component, OnInit, HostListener } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {


  constructor(
  ) {


  }
  f: any;
  ngOnInit(): void {
    let date = new Date();
    let d = date.getMonth();
    let g = date.getFullYear();
    this.f = new Date(g, d + 1, 1);
    let val = new Date(this.f - 1);
    console.log(val);
    console.log(typeof g);
  }

  v: any;
  logg() {
    let cmds = ['guna', 'vels', 'praveen', 'arnes', 'rathees', 'rajes', 'viswa'];
    this.v = cmds[Math.floor(Math.random() * 7)];
    console.log(this.v);
  }
}
