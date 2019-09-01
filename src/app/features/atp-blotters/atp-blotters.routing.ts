
import { RouterModule, Routes } from "@angular/router";
import { AtpBlottersComponent } from "./atp-blotters.component";


export const routes: Routes = [

    {
        path: '',
        component: AtpBlottersComponent
    },

];

export const routing = RouterModule.forChild(routes);
