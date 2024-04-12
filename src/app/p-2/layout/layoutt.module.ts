import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import {  RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {route} from './routing';
import { BsComponent } from './bs/bs.component';
import { SbComponent } from './sb/sb.component';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import { FlexLayoutModule } from '@angular/flex-layout';
const routes:Routes=[
  {
    path:'',
    component:LayoutComponent,
    children:route
  }
]
@NgModule({
  declarations: [
    LayoutComponent,
    BsComponent,
    SbComponent,
    
  ],
  imports: [
    MatListModule,
    MatExpansionModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatBottomSheetModule,
    RouterModule.forChild(routes),
    FlexLayoutModule    
  ],
})
export class LayouttModule { }
