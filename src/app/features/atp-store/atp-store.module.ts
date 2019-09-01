import {NgModule} from "@angular/core";

import { routing } from "./atp-store.routing";
import { AtpStoreComponent } from "./atp-store.component";
import { SharedModule } from "@app/shared/shared.module";

@NgModule({
  declarations: [
      AtpStoreComponent
  ],
  imports: [
    SharedModule,
    routing
  ],
  providers: [],
})
export class AtpStoreModule {

}
