import {NgModule} from "@angular/core";
import { routing } from "./atp-organizations.routing";
import { SharedModule } from "@app/shared/shared.module";
import { AtpOrganizationsComponent } from "./atp-organizations.component";
import { ModalModule, CollapseModule, BsDropdownModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [
    AtpOrganizationsComponent
  ],
  imports: [
    SharedModule,
    routing,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [],
})
export class AtpOrganizationsModule {

}
