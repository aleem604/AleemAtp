import {NgModule} from "@angular/core";

import { routing } from "./atp-boycott.routing";
import { AtpBoycottComponent } from "./atp-boycott.component";
import { SharedModule } from "@app/shared/shared.module";

@NgModule({
  declarations: [
      AtpBoycottComponent
  ],
  imports: [
    SharedModule,
    routing
  ],
  providers: [],
})
export class AtpBoycottModule {

}
