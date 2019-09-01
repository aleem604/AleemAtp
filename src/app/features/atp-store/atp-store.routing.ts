
import { RouterModule, Routes } from "@angular/router";
import { AtpStoreComponent } from "./atp-store.component";

export const routes: Routes = [

    {
        path: '',
        component: AtpStoreComponent
    },

];

export const routing = RouterModule.forChild(routes);
