
import { RouterModule, Routes } from "@angular/router";
import { AtpBoycottComponent } from "./atp-boycott.component";

export const routes: Routes = [

    {
        path: '',
        component: AtpBoycottComponent
    },

];

export const routing = RouterModule.forChild(routes);
