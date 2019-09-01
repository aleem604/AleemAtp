import {NgModule} from "@angular/core";

import { routing } from "./atp-support.routing";
import { AtpSupportComponent } from "./atp-support.component";
import { SharedModule } from "@app/shared/shared.module";

@NgModule({
  declarations: [
      AtpSupportComponent
  ],
  imports: [
    SharedModule,
    routing
  ],
  providers: [],
})
export class AtpSupportModule {

}
