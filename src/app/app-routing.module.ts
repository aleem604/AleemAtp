import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MainLayoutComponent } from "./shared/layout/app-layouts/main-layout.component";
import { AuthLayoutComponent } from "./shared/layout/app-layouts/auth-layout.component";
import { AtpUserComponent } from "./features/atp-user/user.component";
import { NewsFeedModule } from "./features/atp-news-feed/news-feed.module";

const routes: Routes = [
    {
        path: "",
        component: MainLayoutComponent,
        data: { pageTitle: "Home" },
        children: [
            {
                path: "",
                redirectTo: "profile",
                pathMatch: "full"
            },

            {
                path: "app-views",
                loadChildren: "./features/app-views/app-views.module#AppViewsModule",
                data: { pageTitle: "App Views" }
            },

            {
                path: "cropper",
                loadChildren:
                    "app/features/cropper/cropper.module#CropperModule"
            },
            {
                path: "calendar",
                loadChildren:
                    "app/features/calendar/calendar.module#CalendarFeatureModule"
            },
            {
                path: "dashboard",
                loadChildren: "./features/dashboard/dashboard.module#DashboardModule",
                data: { pageTitle: "Dashboard" }
            },

            {
                path: "e-commerce",
                loadChildren: "./features/e-commerce/e-commerce.module#ECommerceModule",
                data: { pageTitle: "E-commerce" }
            },

            {
                path: "forms",
                loadChildren:
                    "./features/forms/forms-showcase.module#FormsShowcaseModule",
                data: { pageTitle: "Forms" }
            },

            {
                path: "graphs",
                loadChildren:
                    "./features/graphs/graphs-showcase.module#GraphsShowcaseModule",
                data: { pageTitle: "Graphs" }
            },

            {
                path: "maps",
                loadChildren: "./features/maps/maps.module#MapsModule",
                data: { pageTitle: "Maps" }
            },

            {
                path: "miscellaneous",
                loadChildren:
                    "./features/miscellaneous/miscellaneous.module#MiscellaneousModule",
                data: { pageTitle: "Miscellaneous" }
            },
            {
                path: "outlook",
                loadChildren: "./features/outlook/outlook.module#OutlookModule",
                data: { pageTitle: "Outlook" }
            },
            {
                path: "smartadmin",
                loadChildren:
                    "./features/smartadmin-intel/smartadmin-intel.module#SmartadminIntelModule",
                data: { pageTitle: "Smartadmin" }
            },

            {
                path: "tables",
                loadChildren: "./features/tables/tables.module#TablesModule",
                data: { pageTitle: "Tables" }
            },

            {
                path: "ui",
                loadChildren:
                    "./features/ui-elements/ui-elements.module#UiElementsModule",
                data: { pageTitle: "Ui" }
            },

            {
                path: "widgets",
                loadChildren:
                    "./features/widgets/widgets-showcase.module#WidgetsShowcaseModule",
                data: { pageTitle: "Widgets" }
            },
            {
                path: "profile",
                loadChildren:
                    "./features/atp-profile/atp-profile.module#AtpProfileModule",
                data: { pageTitle: "Profile" }
            },
            {
                path: "news-feed",
                loadChildren:
                    "./features/atp-news-feed/news-feed.module#NewsFeedModule",
                data: { pageTitle: "New Feed" }
            },
            {
                path: "write-a-letter",
                loadChildren: () => import('./features/atp-write-letter/write-letter.module').then(m => m.WriteLetterModule),
                data: { pageTitle: "Write a Letter" }
            },
            {
                path: "vote",
                loadChildren: () => import('./features/atp-vote/atp-vote.module').then(m => m.AtpVoteModule),
                data: { pageTitle: "Vote" }
            },
            {
                path: "blotter",
                loadChildren: () => import('./features/atp-blotters/atp-blotters.module').then(m => m.AtpBlottersModule),
                data: { pageTitle: "Blotter" }
            },
            {
                path: "politicians",
                loadChildren: () => import('./features/atp-politicians/atp-politicians.module').then(m => m.AtpPoliticiansModule),
                data: { pageTitle: "Politicians" }
            },
            {
                path: "legislation",
                loadChildren: () => import('./features/atp-legislations/atp-legislations.module').then(m => m.AtpLegislationsModule),
                data: { pageTitle: "Legislations" }
            },
            {
                path: "petitions",
                loadChildren: () => import('./features/atp-petitions/atp-petitions.module').then(m => m.AtpPetitionsModule),
                data: { pageTitle: "Petitions" }
            },
            {
                path: "funding",
                loadChildren: () => import('./features/atp-funding/atp-funding.module').then(m => m.AtpFundingModule),
                data: { pageTitle: "Funding" }
            },
            {
                path: "research",
                loadChildren: () => import('./features/atp-research/atp-research.module').then(m => m.AtpResearchModule),
                data: { pageTitle: "Research" }
            },
            {
                path: "organizations",
                loadChildren: () => import('./features/atp-organizations/atp-organizations.module').then(m => m.AtpOrganizationsModule),
                data: { pageTitle: "Organizations" }
            },
            {
                path: "events",
                loadChildren: () => import('./features/atp-events/atp-events.module').then(m => m.AtpEventsModule),
                data: { pageTitle: "Events" }
            },
            {
                path: "support",
                loadChildren: () => import('./features/atp-support/atp-support.module').then(m => m.AtpSupportModule),
                data: { pageTitle: "Support" }
            },
            {
                path: "boycott",
                loadChildren: () => import('./features/atp-boycott/atp-boycott.module').then(m => m.AtpBoycottModule),
                data: { pageTitle: "Boycott" }
            },
            {
                path: "store",
                loadChildren: () => import('./features/atp-store/atp-store.module').then(m => m.AtpStoreModule),
                data: { pageTitle: "Store" }
            },
            {
                path: "archives",
                loadChildren: () => import('./features/atp-archives/atp-archives.module').then(m => m.AtpArchivesModule),
                data: { pageTitle: "Archives" }
            },

        ]
    },

    {
        path: "auth",
        component: AuthLayoutComponent,
        loadChildren: "./features/auth/auth.module#AuthModule"
    },
    {
        path: "atp",
        component: AtpUserComponent,
        loadChildren: () => import('./features/atp-user/user.module').then((m) => m.AtpUserModule)
    },
    { path: "**", redirectTo: "miscellaneous/error404" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: false })],
    exports: [RouterModule]
})
export class AtpRoutingModule { }
