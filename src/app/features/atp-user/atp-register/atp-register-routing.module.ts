import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtpRegisterComponent } from "./atp-register.component";

const routes: Routes = [{
    path: '',
    component: AtpRegisterComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class AtpRegisterRoutingModule { }
