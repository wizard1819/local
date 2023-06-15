import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDirective } from './custom.directive';
import { ColorDirective } from './color.directive';


@NgModule({
  declarations: [CustomDirective, ColorDirective],
  imports: [
    CommonModule
  ],
  exports:[CustomDirective, ColorDirective]
})
export class DirModule { }
