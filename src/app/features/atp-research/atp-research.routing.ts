
import { RouterModule, Routes } from "@angular/router";
import { AtpResearchComponent } from "./atp-research.component";

export const routes: Routes = [

    {
        path: '',
        component: AtpResearchComponent
    },

];

export const routing = RouterModule.forChild(routes);
