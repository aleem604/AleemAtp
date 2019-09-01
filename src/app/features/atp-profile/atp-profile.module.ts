import {NgModule} from "@angular/core";
import { routing } from "./atp-profile.routing";
import { SharedModule } from "@app/shared/shared.module";
import { AtpProfileComponent } from "./atp-profile.component";
import { ModalModule, CollapseModule, BsDropdownModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [
    AtpProfileComponent
  ],
  imports: [
    SharedModule,
    routing,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [],
})
export class AtpProfileModule {

}
