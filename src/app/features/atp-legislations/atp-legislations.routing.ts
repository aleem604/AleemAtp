
import {RouterModule, Routes} from "@angular/router";
import { AtpLegislationsComponent} from "./atp-legislations.component";


export const routes:Routes = [

  {
    path: '',
        component: AtpLegislationsComponent
  },

];

export const routing = RouterModule.forChild(routes);
