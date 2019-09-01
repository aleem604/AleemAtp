import { NgModule } from "@angular/core";

import { routing } from "./atp-vote.routing";
import { AtpVoteComponent } from "./atp-vote.component";
import { SharedModule } from "@app/shared/shared.module";



@NgModule({
    declarations: [
        AtpVoteComponent
    ],
    imports: [
        SharedModule,
        routing
    ],
    providers: [],
})
export class AtpVoteModule {

}
