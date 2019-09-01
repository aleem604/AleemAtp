import {NgModule} from "@angular/core";

import { routing } from "./atp-petitions.routing";
import { AtpPetitionsComponent} from "./atp-petitions.component";
import { SharedModule } from "@app/shared/shared.module";

@NgModule({
  declarations: [
      AtpPetitionsComponent
  ],
  imports: [
    SharedModule,
    routing
  ],
  providers: [],
})
export class AtpPetitionsModule {

}
