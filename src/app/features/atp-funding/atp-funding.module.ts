import {NgModule} from "@angular/core";

import { routing } from "./atp-funding.routing";
import { AtpFundingComponent} from "./atp-funding.component";
import { SharedModule } from "@app/shared/shared.module";

@NgModule({
  declarations: [
      AtpFundingComponent
  ],
  imports: [
    SharedModule,
    routing
  ],
  providers: [],
})
export class AtpFundingModule {

}
