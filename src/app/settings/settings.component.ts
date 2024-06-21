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
    this.inColor= localStorage.getItem('current_theme_local');
    let col = JSON.parse(this.inColor);
    console.log(col);
    this.colorForm = this.fb.group({
      h:new FormControl(col?.h, [Validators.required]),
      s:new FormControl(col?.s,[Validators.required]),
      c:new FormControl(col?.c,[Validators.required]),
    });
    // this.colorForm.patchValue(col);


    this.colorForm.valueChanges.subscribe((res)=>{
      for(let r in res){
        console.log(`${r}  ${res[r]}`);
        
      }
    });

  }


  apply(){
    if(this.colorForm.valid){
      this.theme.setCurrentTheme(this.colorForm.value);
      this.theme.loadPersistedTheme();
    }
  }

}
