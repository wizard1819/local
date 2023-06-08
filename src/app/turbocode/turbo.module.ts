import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurbocodeComponent } from './turbocode.component';
import { TurbocodeService } from './turbocode.service';
import { AddComponent } from './add/add.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AddComponent,
    TurbocodeComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  providers:[TurbocodeService]
})
export class TurboModule { }
