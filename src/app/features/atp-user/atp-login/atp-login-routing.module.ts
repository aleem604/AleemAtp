import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AtpLoginComponent} from "./atp-login.component";

const routes: Routes = [{
  path: '',
  component: AtpLoginComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AtpLoginRoutingModule { }
