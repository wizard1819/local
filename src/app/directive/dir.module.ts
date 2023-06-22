import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDirective } from './custom.directive';
import { ColorDirective } from './color.directive';
import { CustombuttonDirective } from './custombutton.directive';


@NgModule({
  declarations: [CustomDirective, ColorDirective, CustombuttonDirective],
  imports: [
    CommonModule
  ],
  exports:[CustomDirective, ColorDirective, CustombuttonDirective]
})
export class DirModule { }
