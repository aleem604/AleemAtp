
import { RouterModule, Routes } from "@angular/router";
import { AtpFundingComponent } from "./atp-funding.component";


export const routes: Routes = [

    {
        path: '',
        component: AtpFundingComponent
    },

];

export const routing = RouterModule.forChild(routes);
