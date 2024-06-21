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
    this.theme.color$.subscribe((res)=>{
      this.inColor = res;
    });
    
    let col = this.inColor;
    this.colorForm = this.fb.group({
      h:new FormControl(col?.h, [Validators.required]),
      hh:new FormControl(col?.hh, [Validators.required]),
      s:new FormControl(col?.s,[Validators.required]),
      hs:new FormControl(col?.hs,[Validators.required]),
      c:new FormControl(col?.c,[Validators.required]),
      hc:new FormControl(col?.hc,[Validators.required]),
    });
   

  }


  apply(){
    if(this.colorForm.valid){
      this.theme.setCurrentTheme(this.colorForm.value);
      // this.theme.loadPersistedTheme();
    }
  }

}
