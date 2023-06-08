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
import { LoginComponent } from './login/login.component';
import { TurbocodeComponent } from './turbocode/turbocode.component';
import { NgbComponent } from './ngb/ngb.component';
const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children:[
      {
        path:'',
        redirectTo:'/home',
        pathMatch:'full'
      },
      {
        path:'hero',
        component:HeroesComponent
      },
      {
        path:'bike',
        component: VehicleComponent
      },
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'text',
        component:TextanimationsComponent
      },
      {
        path:'angular',
        component:AngularComponent
      }, 
      {
        path:'spinner',
        component:SpinnerComponent
      }, 
      {
        path:'food-org',
        component:FoodOrgComponent
      }, 
      {
        path:'theme',
        component:ThemeComponent
      }, 
      {
        path:'login',
        component:LoginComponent
      }, 
      {
        path:'turbo',
        component:TurbocodeComponent
      }, 
      {
        path:'page',
        component:NgbComponent
      }, 
      

    ]
  },
  
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
