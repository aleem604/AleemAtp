
import { RouterModule, Routes } from "@angular/router";
import { AtpCrimesComponent } from "./atp-crimes.component";


export const routes: Routes = [

    {
        path: '',
        component: AtpCrimesComponent
    },

];

export const routing = RouterModule.forChild(routes);
