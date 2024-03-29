import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";


import {CollapseMenuComponent} from "./collapse-menu/collapse-menu.component";
import {RecentProjectsComponent} from "./recent-projects/recent-projects.component";
import {FullScreenComponent} from "./full-screen/full-screen.component";

import {ActivitiesComponent} from "./activities/activities.component";
import {ActivitiesMessageComponent} from "./activities/activities-message/activities-message.component";
import {ActivitiesNotificationComponent} from "./activities/activities-notification/activities-notification.component";
import {ActivitiesTaskComponent} from "./activities/activities-task/activities-task.component";
import {HeaderComponent} from "./header.component";

import {UtilsModule} from "@app/shared/utils/utils.module";
import {PipesModule} from "@app/shared/pipes/pipes.module";
import {I18nModule} from "@app/shared/i18n/i18n.module";
import {UserModule} from "@app/shared/user/user.module";
import {VoiceControlModule} from "@app/shared/voice-control/voice-control.module";
import {BsDropdownModule, PopoverModule} from "ngx-bootstrap";
import { HeaderProfileLinkComponent } from "./sa-profile-link/sa-profile-link.component";
import { RouterModule } from "@angular/router";
import { HeaderNotificationComponent } from "./sa-notification-link/sa-notification-link.component";


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,

    VoiceControlModule,

    BsDropdownModule,

    UtilsModule,PipesModule, I18nModule, UserModule, PopoverModule,
  ],
  declarations: [
    ActivitiesMessageComponent,
    ActivitiesNotificationComponent,
    ActivitiesTaskComponent,
    RecentProjectsComponent,
    FullScreenComponent,
    CollapseMenuComponent,
    ActivitiesComponent,
    HeaderComponent,
    HeaderProfileLinkComponent,
    HeaderNotificationComponent
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule{}
