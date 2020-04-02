import {NgModule} from "@angular/core";
import { NgSelect2Module } from 'ng-select2';

import { routing } from "./atp-archives.routing";
import { AtpArchivesComponent } from "./atp-archives.component";
import { SharedModule } from "@app/shared/shared.module";

@NgModule({
  declarations: [
      AtpArchivesComponent
  ],
  imports: [
      SharedModule,
      NgSelect2Module,
    routing
  ],
  providers: [],
})
export class AtpArchivesModule {

}
