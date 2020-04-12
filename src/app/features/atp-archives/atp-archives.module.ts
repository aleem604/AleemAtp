import {NgModule} from "@angular/core";
import { NgSelect2Module } from 'ng-select2';

import { atpRouting } from "./atp-archives.routing";
import { SharedModule } from "@app/shared/shared.module";
import { AtpArchiveMainComponent } from "./atp-archive-main/atp-archive-main.component";
import { ArchivedVideosComponent } from "./archived-videos/archived-videos.component";
import { ArchivedArticlesComponent } from "./archived-articles/archived-articles.component";
import { AtpArchivesComponent } from "./atp-archive/atp-archives.component";
import { MatVideoModule } from "mat-video";

@NgModule({
  declarations: [
        AtpArchiveMainComponent,
        AtpArchivesComponent ,
        ArchivedArticlesComponent,
        ArchivedVideosComponent
  ],
  imports: [
      SharedModule,
      MatVideoModule,
      NgSelect2Module,
    atpRouting
  ],
  providers: [],
})
export class AtpArchivesModule {

}
