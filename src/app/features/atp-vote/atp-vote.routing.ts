
import { RouterModule, Routes } from "@angular/router";
import { AtpVoteComponent } from "./atp-vote.component";


export const routes: Routes = [

    {
        path: '',
        component: AtpVoteComponent
    },

];

export const routing = RouterModule.forChild(routes);
