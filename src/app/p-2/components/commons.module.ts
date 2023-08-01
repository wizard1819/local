import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservablComponent } from '../components/observabl/observabl.component';
import { RouterModule, Routes } from '@angular/router';
import { RxjsoverviewComponent } from './rxjsoverview/rxjsoverview.component';
import { ColorDirective } from 'src/app/directive';
export const route : Routes=([
  {
    path:'obb',
    component:ObservablComponent
  },
  {
    path:'rxjsoverview',
    component:RxjsoverviewComponent
  }
])

@NgModule({
  declarations: [
    ObservablComponent,
    RxjsoverviewComponent,
    ColorDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class CommonsModule { }
