import {NgModule} from "@angular/core";

import { routing } from "./atp-research.routing";
import { AtpResearchComponent } from "./atp-research.component";
import { SharedModule } from "@app/shared/shared.module";

@NgModule({
  declarations: [
      AtpResearchComponent
  ],
  imports: [
    SharedModule,
    routing
  ],
  providers: [],
})
export class AtpResearchModule {

}
