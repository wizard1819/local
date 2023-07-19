import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HomeComponent } from './home/home.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { TextanimationsComponent } from './textanimations/textanimations.component';
import { AngularComponent } from './angular/angular.component';
import { FullComponent } from './layout/full/full.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { FoodOrgComponent } from './food-org/food-org.component';
import { ThemeComponent } from './theme/theme.component';
import { TurbocodeComponent } from './turbocode/turbocode.component';
import { NgbComponent } from './ngb/ngb.component';
import { ExpoComponent } from './expo/expo.component';
import { LoginComponent } from './login/login.component';
import { AddvehicleComponent } from './vehicle/addvehicle/addvehicle.component';
import { SenderComponent } from './sender/sender.component';
import { ReceiverComponent } from './sender/receiver/receiver.component';
import { CartComponent } from './study/cart/cart.component';
import { ProductComponent } from './study/product/product.component';
import { FormstudyComponent } from './study/formstudy/formstudy.component';
import { CycleComponent } from './study/cycle/cycle.component';
import { ChipsComponent } from './chips/chips.component';
import { LoginGuard, childguard } from './commons/guards/login.guard';
import { ErrorComponent } from './error/error.component';
import { StudyoneobservableComponent } from './study/studyoneobservable/studyoneobservable.component';
import { StudysubjectComponent } from './study/studysubject/studysubject.component';
import { TapmapComponent } from './study/tapmap/tapmap.component';
import { DynamicformComponent } from './study/dynamicform/dynamicform.component';
import { FormaddComponent } from './study/formadd/formadd.component';
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
            path: 'hero',
            component: HeroesComponent
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
            path: 'spinner',
            component: SpinnerComponent
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
            component: DynamicformComponent
          },
          {
            path: 'tap',
            component: TapmapComponent

          },
          {
            path: 'food-org',
            component: FoodOrgComponent
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
            path: 'page',
            component: NgbComponent
          },
          {
            path: 'expo',
            component: ExpoComponent
          },
          {
            path: 'sender',
            component: SenderComponent
          },
          {
            path: 'receiver',
            component: ReceiverComponent
          },
          {
            path: 'cart',
            component: CartComponent
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
