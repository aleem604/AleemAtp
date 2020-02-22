import { NgModule } from "@angular/core";

import { routing } from "./atp-crimes.routing";
import { AtpCrimesComponent } from "./atp-crimes.component";
import { SharedModule } from "@app/shared/shared.module";



@NgModule({
    declarations: [
        AtpCrimesComponent
    ],
    imports: [
        SharedModule,
        routing
    ],
    providers: [],
})
export class AtpCrimesModule {

}
