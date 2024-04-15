import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Work1testComponent } from '../work1test/work1test.component';
import { RouterModule, Routes } from '@angular/router';
import { PdfMakeComponent } from '../pdf-make/pdf-make.component';
import { PdfmakeModule } from 'ng-pdf-make';

export const route: Routes = [
  {
    path: '',
    component: Work1testComponent
  },
  {
    path: 'pdf',
    component : PdfMakeComponent
  }
]

@NgModule({
  declarations: [
    Work1testComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
  ]
})
export class WorkModule { }
