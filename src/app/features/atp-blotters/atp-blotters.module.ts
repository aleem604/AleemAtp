import { NgModule } from "@angular/core";

import { routing } from "./atp-blotters.routing";
import { AtpBlottersComponent } from "./atp-blotters.component";
import { SharedModule } from "@app/shared/shared.module";



@NgModule({
    declarations: [
        AtpBlottersComponent
    ],
    imports: [
        SharedModule,
        routing
    ],
    providers: [],
})
export class AtpBlottersModule {

}
