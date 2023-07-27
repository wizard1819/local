import { Routes } from "@angular/router";

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