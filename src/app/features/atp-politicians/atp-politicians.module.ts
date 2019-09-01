import {NgModule} from "@angular/core";
import { routing } from "./atp-politicians.routing";
import { SharedModule } from "@app/shared/shared.module";
import { AtpPoliticiansComponent } from "./atp-politicians.component";
import { ModalModule, CollapseModule, BsDropdownModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [
    AtpPoliticiansComponent
  ],
  imports: [
    SharedModule,
    routing,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [],
})
export class AtpPoliticiansModule {

}
