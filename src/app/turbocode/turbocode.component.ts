import { Component, OnInit } from '@angular/core';
import { HostDirective } from '../directive/host.directive';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { SnackbarService } from '../snackbar/snackbar.service';
@Component({
  selector: 'app-turbocode',
  templateUrl: './turbocode.component.html',
  styleUrls: ['./turbocode.component.css'],
})

export class TurbocodeComponent implements OnInit {

  form!: FormGroup;
  time!: FormControl;

  submited: boolean = false;
  show: boolean = false;
  constructor(
    private fb: FormBuilder,
    private snackbar: SnackbarService
  ) {

  }

  ngOnInit(): void {

    this.form = this.fb.group({
      gender : new FormControl()
    })
  }




  
}

