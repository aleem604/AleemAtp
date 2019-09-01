import {NgModule} from "@angular/core";

import { routing } from "./write-letter.routing";
import {WhiteLetterComponent} from "./write-letter.component";
import { SharedModule } from "@app/shared/shared.module";
import { WhiteLetterEditComponent } from "./edit/write-letter-edit.component";



@NgModule({
  declarations: [
    WhiteLetterComponent,
    WhiteLetterEditComponent
  ],
  imports: [
    SharedModule,
    routing
  ],
  providers: [],
})
export class WriteLetterModule {

}
