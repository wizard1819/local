import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackbarComponent } from './snackbar.component';
import { DirModule } from '../directive/dir.module';

@NgModule({
  declarations: [SnackbarComponent],
  imports: [
    CommonModule,
    DirModule
  ],
})
export class SnackbarModule { }
