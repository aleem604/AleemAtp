
import {RouterModule, Routes} from "@angular/router";
import {NewsFeedComponent} from "./news-feed.component";


export const routes:Routes = [

  {
    path: '',
    component: NewsFeedComponent
  },

];

export const routing = RouterModule.forChild(routes);
