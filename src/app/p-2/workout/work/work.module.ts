import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Work1testComponent } from '../work1test/work1test.component';
import { RouterModule, Routes } from '@angular/router';
import { PdfMakeComponent } from '../pdf-make/pdf-make.component';
import {  NgApexchartsModule } from 'ng-apexcharts';
import { PieChartComponent } from '../pie-chart/pie-chart.component';


export const route: Routes = [
  {
    path: '',
    component: Work1testComponent
  },
  {
    path: 'pdf',
    component : PdfMakeComponent
  },
  {
    path:'pieChart',
    component: PieChartComponent
  }
]

@NgModule({
  declarations: [
    Work1testComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    NgApexchartsModule,

    
    
  ],
  exports:[
  ]
})
export class WorkModule { }
