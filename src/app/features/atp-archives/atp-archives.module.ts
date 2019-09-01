import {NgModule} from "@angular/core";

import { routing } from "./atp-archives.routing";
import { AtpArchivesComponent } from "./atp-archives.component";
import { SharedModule } from "@app/shared/shared.module";

@NgModule({
  declarations: [
      AtpArchivesComponent
  ],
  imports: [
    SharedModule,
    routing
  ],
  providers: [],
})
export class AtpArchivesModule {

}
