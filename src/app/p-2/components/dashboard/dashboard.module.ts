import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { ColorDirective } from 'src/app/directive';
import {MatTabsModule} from '@angular/material/tabs';
@NgModule({
  declarations: [
    DashboardComponent,
    ColorDirective
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    RouterModule.forChild([
      {
        path:'',
        component:DashboardComponent
      }
    ])
  ],
  exports:[ColorDirective]
})
export class DashboardModule { }
