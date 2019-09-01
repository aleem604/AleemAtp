
import { RouterModule, Routes } from "@angular/router";
import { AtpEventsComponent } from "./atp-events.component";

export const routes: Routes = [

    {
        path: '',
        component: AtpEventsComponent
    },

];

export const routing = RouterModule.forChild(routes);
