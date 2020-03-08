
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
import { PoliticianWriteLetterComponent } from "./atp-write-letter/politician-write-letter.component";

export const routes: Routes = [
    {
        path: '',
        component: AtpPoliticiansComponent,
        children: [
            {
                path: 'vote-history/:id',
                component: PoliticianVoteHistoryComponent
            },
            {
                path: 'articles/:id',
                component: ProfileArticlesComponent
            },
            {
                path: 'organizations/:id',
                component: ProfileOrganizationsComponent
            },
            {
                path: 'posts/:id',
                component: PoliticianPostsComponent
            },
            {
                path: 'responses/:id',
                component: PoliticianResponsesComponent
            },
            {
                path: 'responses/:id/detail/:detailId',
                component: PoliticianResponseDetailComponent
            },
            {
                path: 'district-concerns/:id',
                component: PoliticianDistrictConcernsComponent
            },
            {
                path: 'write-me/:id',
                component: PoliticianWriteMeComponent
            },
            {
                path: '',
                component: PoliticianWriteLetterComponent
            },
        ]
    }
];

export const routing = RouterModule.forChild(routes);
