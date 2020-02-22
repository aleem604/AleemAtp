
import { RouterModule, Routes } from "@angular/router";
import { AtpPoliticiansComponent } from "./atp-politicians.component";
import { ProfileVideosComponent } from "../../shared/profile-videos/profile-videos.component";
import { ProfileOrganizationsComponent } from "../../shared/profile-organizations/profile-organizations.component";
import { ProfileArticlesComponent } from "../../shared/profile-articles/profile-articles.component";
import { PoliticianDistrictConcernsComponent } from "../../shared/politician-district-concerns/politician-district-concerns.component";
import { PoliticianPostsComponent } from "../../shared/politician-posts/politician-posts.component";
import { PoliticianResponsesComponent } from "../../shared/politician-responses/politician-responses.component";
import { PoliticianResponseDetailComponent } from "../../shared/politician-response-detail/politician-response-detail.component";
import { PoliticianVoteHistoryComponent } from "../../shared/politician-vote-history/politician-vote-history.component";
import { PoliticianWriteMeComponent } from "../../shared/politician-write-me/politician-write-me.component";
import { PoliticianWriteLetterComponent } from "../../shared/politician-write-letter/politician-write-letter.component";
import { PoliticianWriteLetterEditComponent } from "../../shared/politician-write-letter/politician-write-letter-edit/politician-write-letter-edit.component";

export const routes: Routes = [
    {
        path: '',
        component: AtpPoliticiansComponent,
        children: [
            {
                path: 'write-a-letter',
                component: PoliticianWriteLetterComponent
            },
            {
                path: 'write-a-letter/edit',
                component: PoliticianWriteLetterEditComponent
            },
            {
                path: 'vote-history',
                component: PoliticianVoteHistoryComponent
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
                path: 'posts',
                component: PoliticianPostsComponent
            },
            {
                path: 'responses',
                component: PoliticianResponsesComponent
            },
            {
                path: 'responses/:id',
                component: PoliticianResponseDetailComponent
            },
            {
                path: 'district-concerns',
                component: PoliticianDistrictConcernsComponent
            },
            {
                path: 'write-me',
                component: PoliticianWriteMeComponent
            },
            {
                path: '',
                redirectTo: 'write-a-letter'
            },
        ]
    }
];

export const routing = RouterModule.forChild(routes);
