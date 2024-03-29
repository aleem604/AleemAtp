
import { RouterModule, Routes } from "@angular/router";
import { AtpOrganizationsComponent } from "./atp-organizations.component";
import { OrgAboutComponent } from "../../shared/org-about/org-about.component";
import { OrgStanceComponent } from "../../shared/org-stance/org-stance.component";
import { OrgVideosComponent } from "../../shared/org-videos/org-videos.component";
import { OrgArticlesComponent } from "../../shared/org-articles/org-articles.component";
import { OrgEventsComponent } from "../../shared/org-events/org-events.component";
import { OrganizationsOrganizationsComponent } from "../../shared/organizations-organizations/organizations-organizations.component";

export const routes: Routes = [
    {
        path: '',
        component: AtpOrganizationsComponent,
        children: [
            {
                path: 'video/:id',
                component: OrgVideosComponent
            },
            {
                path: 'articles/:id',
                component: OrgArticlesComponent
            },
            {
                path: 'about/:id',
                component: OrgAboutComponent
            },
            {
                path: 'stance/:id',
                component: OrgStanceComponent
            },
            {
                path: 'events/:id',
                component: OrgEventsComponent
            },
            {
                path: '',
                component: OrganizationsOrganizationsComponent,
                pathMatch:'full'
            },
        ]
    }
];

export const routing = RouterModule.forChild(routes);
