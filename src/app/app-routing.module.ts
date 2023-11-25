import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { TextanimationsComponent } from './textanimations/textanimations.component';
import { AngularComponent } from './angular/angular.component';
import { FullComponent } from './layout/full/full.component';
import { ThemeComponent } from './theme/theme.component';
import { TurbocodeComponent } from './turbocode/turbocode.component';
import { ExpoComponent } from './expo/expo.component';
import { LoginComponent } from './login/login.component';
import { AddvehicleComponent } from './vehicle/addvehicle/addvehicle.component';
import { ProductComponent } from './study/product/product.component';
import { FormstudyComponent } from './study/formstudy/formstudy.component';
import { CycleComponent } from './study/cycle/cycle.component';
import { ChipsComponent } from './chips/chips.component';
import { LoginGuard, candeactivate, childguard } from './commons/guards/login.guard';
import { ErrorComponent } from './error/error.component';
import { StudyoneobservableComponent } from './study/studyoneobservable/studyoneobservable.component';
import { StudysubjectComponent } from './study/studysubject/studysubject.component';
import { TapmapComponent } from './study/tapmap/tapmap.component';
import { DynamicformComponent } from './study/dynamicform/dynamicform.component';
import { FormaddComponent } from './study/formadd/formadd.component';
import { FormoneComponent } from './forms/formone/formone.component';
import { Chips2Component } from './chips/chips2/chips2.component';
import { Chips3Component } from './chips/chips3/chips3.component';
import { InputComponent } from './o/input/input.component';
import { OutputComponent } from './o/output/output.component';
import { NewformComponent } from './study/newform/newform.component';
import { BuComponent } from './study/bu/bu.component';
import { FormcheckComponent } from './formcheck/formcheck.component';
import { GunaComponent } from './test and study/guna/guna.component';
import { TesingRxjsComponent } from './test and study/tesing-rxjs/tesing-rxjs.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path:'',
        canActivate:[LoginGuard],
        loadChildren:()=> import('./p-2/layout/layoutt.module').then((m)=>m.LayouttModule)
      },
      {
        path: '',
        canActivate: [LoginGuard],
        canActivateChild: [childguard],
        component: FullComponent,
        children: [
          {
            path: '',
            redirectTo: '/home',
            pathMatch: 'full'
          },
          {
            path: 'bike',
            component: VehicleComponent
          },
          {
            path: 'home',
            component: HomeComponent
          },
          {
            path: 'text',
            component: TextanimationsComponent
          },
          {
            path: 'angular',
            component: AngularComponent
          },
          {
            path: 'fc',
            component: FormcheckComponent
          },
          {
            path: 'studyone',
            component: StudyoneobservableComponent
          },
          {
            path: 'subj',
            component: StudysubjectComponent
          },
          {
            path: 'formadd',
            component: FormaddComponent
          },
          {
            path: 'dynamic',
            component: DynamicformComponent,
            canDeactivate:[candeactivate]
          },
          {
            path: 'done',
            component: FormoneComponent
          },
          {
            path: 'tap',
            component: TapmapComponent

          },
          {
            path: 'theme',
            component: ThemeComponent
          },
          {
            path: 'addvehicle',
            component: AddvehicleComponent
          },

          {
            path: 'tbs',
            component: TurbocodeComponent
          },
          {
            path: 'expo',
            component: ExpoComponent
          },
          {
            path: 'cycle',
            component: CycleComponent
          },
          {
            path: 'chips',
            component: ChipsComponent
          },
          {
            path: 'prod',
            component: ProductComponent
          },
          {
            path: 'forms',
            component: FormstudyComponent
          },
          {
            path: 'chips2',
            component: Chips2Component
          },
          {
            path: 'chips3',
            component: Chips3Component
          },
          {
            path: 'input',
            component: InputComponent
          },
          {
            path: 'outpt',
            component: OutputComponent
          },
          {
            path: 'a',
            component: GunaComponent
          },
          {
            path: 'b',
            component: TesingRxjsComponent
          },
          {
            path: 'newForm',
            component: NewformComponent
          },
          {
            path: 'bu',
            component: BuComponent
          },
          {
            path:'test-component',
            loadChildren: ()=> import('./test/test.module').then((m)=>m.TestModule)
          }

        ]
      },
    ]
  },
  { path: '**', redirectTo: '/error', pathMatch: 'full' },
  { path: 'error', component: ErrorComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
