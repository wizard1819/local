import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDirective } from './custom.directive';


@NgModule({
  declarations: [CustomDirective],
  imports: [
    CommonModule
  ],
  exports:[CustomDirective]
})
export class DirModule { }
