import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDirective } from './custom.directive';
import { ColorDirective } from './color.directive';
import { CustombuttonDirective } from './custombutton.directive';
import { HostDirective } from './host.directive';
import { bdirr } from './color.directive';

@NgModule({
  declarations: [CustomDirective, ColorDirective, CustombuttonDirective, HostDirective,bdirr],
  imports: [
    CommonModule
  ],
  exports:[CustomDirective, ColorDirective, CustombuttonDirective,bdirr]
})
export class DirModule { }
