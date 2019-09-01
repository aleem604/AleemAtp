
import { RouterModule, Routes } from "@angular/router";
import { AtpArchivesComponent } from "./atp-archives.component";

export const routes: Routes = [

    {
        path: '',
        component: AtpArchivesComponent
    },

];

export const routing = RouterModule.forChild(routes);
