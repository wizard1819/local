import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponentComponent } from './test-component/test-component.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    TestComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'',
        component:TestComponentComponent
      }
    ])
  ],
  
})
export class TestModule { }
