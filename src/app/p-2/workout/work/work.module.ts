import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Work1testComponent } from '../work1test/work1test.component';
import { RouterModule, Routes } from '@angular/router';

export const route: Routes = [
  {
    path: '',
    component: Work1testComponent
  }
]

@NgModule({
  declarations: [
    Work1testComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
  ]
})
export class WorkModule { }
