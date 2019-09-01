
import { RouterModule, Routes } from "@angular/router";
import { AtpSupportComponent } from "./atp-support.component";

export const routes: Routes = [

    {
        path: '',
        component: AtpSupportComponent
    },

];

export const routing = RouterModule.forChild(routes);
