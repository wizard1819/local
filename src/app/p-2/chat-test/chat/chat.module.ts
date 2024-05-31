import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChattestComponent } from '../chattest/chattest.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ChattestComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path : '',
        component: ChattestComponent
      }
    ])
  ]
})
export class ChatModule { }
