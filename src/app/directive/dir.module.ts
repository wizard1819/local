import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDirective } from './custom.directive';
import { CustombuttonDirective } from './custombutton.directive';
import { HostDirective } from './host.directive';

@NgModule({
  declarations: [CustomDirective,  CustombuttonDirective, HostDirective],
  imports: [
    CommonModule
  ],
  exports:[CustomDirective,  CustombuttonDirective]
})
export class DirModule { }
