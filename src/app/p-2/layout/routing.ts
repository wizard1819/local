import { Routes } from "@angular/router";
import { HomeComponent } from "src/app/home/home.component";

export const route : Routes=[
   {
      path:'',
      redirectTo:'/dashboard',
      pathMatch:'full'
   },
  {
   path:'dashboard',
   loadChildren:()=> import('../components/dashboard/dashboard.module').then((m)=>m.DashboardModule)
  },

]