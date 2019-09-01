import {RouterModule, Routes} from "@angular/router";
import {WhiteLetterComponent} from "./write-letter.component";
import { WhiteLetterEditComponent } from "./edit/write-letter-edit.component";


export const routes:Routes = [

  {
    path: '',
        component: WhiteLetterComponent
  },
  {
    path: 'edit',
    component: WhiteLetterEditComponent
  },
];

export const routing = RouterModule.forChild(routes);
