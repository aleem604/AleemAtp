
import { RouterModule, Routes } from "@angular/router";
import { AtpArchiveMainComponent } from "./atp-archive-main/atp-archive-main.component";
import { AtpArchivesComponent } from "./atp-archive/atp-archives.component";
export const routes: Routes = [

    {
        path: '',
        component: AtpArchiveMainComponent,
        children: [
            {
                path: '',
                component: AtpArchivesComponent
            }
        ]
    },

];

export const atpRouting = RouterModule.forChild(routes);
