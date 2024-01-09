import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { ColorDirective } from 'src/app/directive';
import {MatTabsModule} from '@angular/material/tabs';
import { CommonComponentModule } from 'src/app/common/commoncomponent.module';
@NgModule({
  declarations: [
    DashboardComponent,
    ColorDirective
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    CommonComponentModule,
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
