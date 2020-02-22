import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MatVideoModule } from 'mat-video';

import { HeaderModule } from "./header/header.module";
import { FooterComponent } from "./footer/footer.component";
import { NavigationModule } from "./navigation/navigation.module";
import { RibbonComponent } from "./ribbon/ribbon.component";
import { ShortcutComponent } from "./shortcut/shortcut.component";
import { LayoutSwitcherComponent } from "./layout-switcher.component";
import { MainLayoutComponent } from './app-layouts/main-layout.component';
import { EmptyLayoutComponent } from './app-layouts/empty-layout.component';
import { RouterModule } from "@angular/router";
import { AuthLayoutComponent } from './app-layouts/auth-layout.component';
import { TooltipModule, BsDropdownModule, ModalModule } from "ngx-bootstrap";
import { RouteBreadcrumbsComponent } from './ribbon/route-breadcrumbs.component';
import { UtilsModule } from "../utils/utils.module";
import { AtpUserComponent } from "@app/features/atp-user/user.component";
import { NgxSpinnerModule } from "ngx-spinner";
import { RecommendedOrgsComponent } from "../recommended-orgs/recommended-orgs.component";
import { ArchivedArticlesComponent } from "../archived-articles/archived-articles.component";
import { ArchivedVideosComponent } from "../archived-videos/archived-videos.component";
import { PipesModule } from "../pipes/pipes.module";
import { SmartadminInputModule } from "../forms/input/smartadmin-input.module";
import { ProfileArticlesComponent } from "../profile-articles/profile-articles.component";
import { ProfileOrganizationsComponent } from "../profile-organizations/profile-organizations.component";
import { ProfileLettersComponent } from "../profile-letters/profile-letters.component";
import { ProfileVideosComponent } from "../profile-videos/profile-videos.component";
import { ProfileLetterDetailComponent } from "../profile-letter-detail/profile-letter-detail.component";
import { ProfilePetitionsComponent } from "../profile-petitions/profile-petitions.component";
import { ProfileSupportComponent } from "../profile-support/profile-support.component";
import { ProfileBoycottComponent } from "../profile-boycott/profile-boycott.component";
import { OrgAboutComponent } from "../org-about/org-about.component";
import { OrgStanceComponent } from "../org-stance/org-stance.component";
import { OrgVideosComponent } from "../org-videos/org-videos.component";
import { OrgArticlesComponent } from "../org-articles/org-articles.component";
import { OrgEventsComponent } from "../org-events/org-events.component";
import { PoliticianDistrictConcernsComponent } from "../politician-district-concerns/politician-district-concerns.component";
import { PoliticianPostsComponent } from "../politician-posts/politician-posts.component";
import { PoliticianResponsesComponent } from "../politician-responses/politician-responses.component";
import { PoliticianResponseDetailComponent } from "../politician-response-detail/politician-response-detail.component";
import { PoliticianVoteHistoryComponent } from "../politician-vote-history/politician-vote-history.component";
import { PoliticianWriteMeComponent } from "../politician-write-me/politician-write-me.component";
import { OrganizationsOrganizationsComponent } from "../organizations-organizations/organizations-organizations.component";
import { PoliticianWriteLetterComponent } from "../politician-write-letter/politician-write-letter.component";
import { PoliticianWriteLetterEditComponent } from "../politician-write-letter/politician-write-letter-edit/politician-write-letter-edit.component";

@NgModule({
    imports: [
        CommonModule,
        HeaderModule,
        NavigationModule,
        FormsModule,
        RouterModule,
        NgxSpinnerModule,
        UtilsModule,
        MatVideoModule,
        SmartadminInputModule,

        ModalModule.forRoot(),
        TooltipModule,
        BsDropdownModule,
        PipesModule
    ],
    declarations: [
        FooterComponent,
        RibbonComponent,
        ShortcutComponent,
        LayoutSwitcherComponent,
        MainLayoutComponent,
        EmptyLayoutComponent,
        AuthLayoutComponent,
        RouteBreadcrumbsComponent,
        AtpUserComponent,
        RecommendedOrgsComponent,
        ArchivedArticlesComponent,
        ArchivedVideosComponent,
        ProfileArticlesComponent,
        ProfileOrganizationsComponent,
        ProfileLettersComponent,
        ProfileVideosComponent,
        ProfileLetterDetailComponent,
        ProfilePetitionsComponent,
        ProfileSupportComponent,
        ProfileBoycottComponent,
        OrgAboutComponent,
        OrgStanceComponent,
        OrgVideosComponent,
        OrgArticlesComponent,
        OrgEventsComponent,
        PoliticianDistrictConcernsComponent,
        PoliticianPostsComponent,
        PoliticianResponsesComponent,
        PoliticianResponseDetailComponent,
        PoliticianVoteHistoryComponent,
        PoliticianWriteMeComponent,
        PoliticianWriteLetterComponent,
        PoliticianWriteLetterEditComponent,
        OrganizationsOrganizationsComponent,

    ],
    exports: [
        HeaderModule,
        NavigationModule,
        FooterComponent,
        RibbonComponent,
        ShortcutComponent,
        LayoutSwitcherComponent,
        AtpUserComponent,
        RecommendedOrgsComponent,
        ArchivedArticlesComponent,
        ArchivedVideosComponent,
        ProfileArticlesComponent,
        ProfileOrganizationsComponent,
        ProfileLettersComponent,
        ProfileVideosComponent,
        ProfileLetterDetailComponent,
        ProfilePetitionsComponent,
        ProfileSupportComponent,
        ProfileBoycottComponent,
        OrgAboutComponent,
        OrgStanceComponent,
        OrgVideosComponent,
        OrgArticlesComponent,
        OrgEventsComponent,
        PoliticianDistrictConcernsComponent,
        PoliticianPostsComponent,
        PoliticianResponsesComponent,
        PoliticianResponseDetailComponent,
        PoliticianVoteHistoryComponent,
        PoliticianWriteMeComponent,
        PoliticianWriteLetterComponent,
        PoliticianWriteLetterEditComponent,
        OrganizationsOrganizationsComponent
    ]
})
export class SmartadminLayoutModule {

}
