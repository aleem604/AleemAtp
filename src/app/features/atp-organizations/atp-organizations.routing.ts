
import { RouterModule, Routes } from "@angular/router";
import { AtpOrganizationsComponent } from "./atp-organizations.component";
import { ProfileLetterDetailComponent } from "../../shared/profile-letter-detail/profile-letter-detail.component";
import { ProfilePetitionsComponent } from "../../shared/profile-petitions/profile-petitions.component";
import { ProfileSupportComponent } from "../../shared/profile-support/profile-support.component";
import { ProfileBoycottComponent } from "../../shared/profile-boycott/profile-boycott.component";
import { OrgAboutComponent } from "../../shared/org-about/org-about.component";
import { OrgStanceComponent } from "../../shared/org-stance/org-stance.component";
import { OrgVideosComponent } from "../../shared/org-videos/org-videos.component";
import { OrgArticlesComponent } from "../../shared/org-articles/org-articles.component";
import { OrgEventsComponent } from "../../shared/org-events/org-events.component";

export const routes: Routes = [
    {
        path: '',
        component: AtpOrganizationsComponent,
        children: [
            {
                path: 'video',
                component: OrgVideosComponent
            },
            {
                path: 'articles',
                component: OrgArticlesComponent
            },
            {
                path: 'about',
                component: OrgAboutComponent
            },
            {
                path: 'stance',
                component: OrgStanceComponent
            },
            {
                path: 'events',
                component: OrgEventsComponent
            },
            {
                path: '',
                redirectTo: 'video'
            },
        ]
    }
];

export const routing = RouterModule.forChild(routes);
