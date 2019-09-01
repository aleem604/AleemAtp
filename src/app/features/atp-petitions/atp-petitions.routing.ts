
import { RouterModule, Routes } from "@angular/router";
import { AtpPetitionsComponent } from "./atp-petitions.component";


export const routes: Routes = [

    {
        path: '',
        component: AtpPetitionsComponent
    },

];

export const routing = RouterModule.forChild(routes);
