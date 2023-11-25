import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponentComponent } from './test-component/test-component.component';
import { RouterModule } from '@angular/router';
import { AngularEditorModule } from '@kolkov/angular-editor';


@NgModule({
  declarations: [
    TestComponentComponent
  ],
  imports: [
    CommonModule,
    AngularEditorModule,
    RouterModule.forChild([
      {
        path:'',
        component:TestComponentComponent
      }
    ])
  ],
  exports:[
    AngularEditorModule
  ]
})
export class TestModule { }
