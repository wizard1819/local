import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemeService } from '../theme/theme.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(
    private fb : FormBuilder,
    private theme : ThemeService
  ){}

  colorForm !: FormGroup;
  inColor :any;
  ngOnInit(): void {
    this.inColor= localStorage.getItem('currentTheme');
    let col = JSON.parse(this.inColor);

    this.colorForm = this.fb.group({
      h:new FormControl(null, [Validators.required]),
      s:new FormControl(null,[Validators.required]),
      c:new FormControl(null,[Validators.required]),
    });
    this.colorForm.patchValue(col);
  }

  apply(){
    if(this.colorForm.valid){
      this.theme.setCurrentTheme(this.colorForm.value);
      this.theme.loadPersistedTheme();
    }
  }

}
