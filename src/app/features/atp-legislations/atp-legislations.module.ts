import {NgModule} from "@angular/core";

import { routing } from "./atp-legislations.routing";
import { AtpLegislationsComponent} from "./atp-legislations.component";
import { SharedModule } from "@app/shared/shared.module";



@NgModule({
  declarations: [
      AtpLegislationsComponent
  ],
  imports: [
    SharedModule,
    routing
  ],
  providers: [],
})
export class AtpLegislationsModule {
    public state: any = {
        tabs: {
            demo1: 0,
            demo2: 'tab-r1',
            demo3: 'hr1',
            demo4: 'AA',
            demo5: 'iss1',
            demo6: 'l1',
            demo7: 'tab1',
            demo8: 'hb1',
            demo9: 'A1',
            demo10: 'is1'
        }
    };


}
