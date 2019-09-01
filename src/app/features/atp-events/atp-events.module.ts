import {NgModule} from "@angular/core";

import { routing } from "./atp-events.routing";
import { AtpEventsComponent } from "./atp-events.component";
import { SharedModule } from "@app/shared/shared.module";

@NgModule({
  declarations: [
      AtpEventsComponent
  ],
  imports: [
    SharedModule,
    routing
  ],
  providers: [],
})
export class AtpEventsModule {

}
