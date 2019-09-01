
import { RouterModule, Routes } from "@angular/router";
import { AtpProfileComponent } from "./atp-profile.component";
import { ProfileVideosComponent } from "../../shared/profile-videos/profile-videos.component";
import { ProfileOrganizationsComponent } from "../../shared/profile-organizations/profile-organizations.component";
import { ProfileLettersComponent } from "../../shared/profile-letters/profile-letters.component";
import { ProfileLetterDetailComponent } from "../../shared/profile-letter-detail/profile-letter-detail.component";
import { ProfileArticlesComponent } from "../../shared/profile-articles/profile-articles.component";
import { ProfilePetitionsComponent } from "../../shared/profile-petitions/profile-petitions.component";
import { ProfileSupportComponent } from "../../shared/profile-support/profile-support.component";
import { ProfileBoycottComponent } from "../../shared/profile-boycott/profile-boycott.component";

export const routes: Routes = [
    {
        path: '',
        component: AtpProfileComponent,
        children: [
            {
                path: 'video',
                component: ProfileVideosComponent
            },
            {
                path: 'articles',
                component: ProfileArticlesComponent
            },
            {
                path: 'organizations',
                component: ProfileOrganizationsComponent
            },
            {
                path: 'letters',
                component: ProfileLettersComponent
            },
            {
                path: 'letters/:id',
                component: ProfileLetterDetailComponent
            },
            {
                path: 'petitions',
                component: ProfilePetitionsComponent
            },
            {
                path: 'support',
                component: ProfileSupportComponent
            },
            {
                path: 'boycott',
                component: ProfileBoycottComponent
            },
            {
                path: '',
                redirectTo: 'video'
            },
        ]
    }
];

export const routing = RouterModule.forChild(routes);
