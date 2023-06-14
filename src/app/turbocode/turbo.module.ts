import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurbocodeComponent } from './turbocode.component';
import { TurbocodeService } from './turbocode.service';
import { AddComponent } from './add/add.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DirModule } from '../directive/dir.module';
@NgModule({
  declarations: [
    AddComponent,
    TurbocodeComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSnackBarModule,
    DirModule
  ],
  providers:[TurbocodeService],
  
})
export class TurboModule { }
