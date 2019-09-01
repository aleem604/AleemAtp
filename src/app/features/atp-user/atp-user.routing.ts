
import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from "@angular/router";


export const routes:Routes = [
  {
    path: 'login',
    loadChildren: ()=>import('./atp-login/atp-login.module').then(m=>m.AtpLoginModule)
  },
  {
    path: 'register',
      loadChildren: () => import('./atp-register/atp-register.module').then(m => m.AtpRegisterModule)
  },
  //{
  //  path: 'forgot-password',
  //  loadChildren: './forgot/forgot.module#ForgotModule'
  //},
  //{
  //  path: 'locked',
  //  loadChildren: './locked/locked.module#LockedModule'
  //}
];

export const AtpUserRouting = RouterModule.forChild(routes);
