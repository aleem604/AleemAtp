import { NgModule } from "@angular/core";
import { routing } from "./atp-politicians.routing";
import { SharedModule } from "@app/shared/shared.module";
import { AtpPoliticiansComponent } from "./atp-politicians.component";
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import { PoliticianWriteLetterComponent } from "./atp-write-letter/politician-write-letter.component";
import { PoliticianWriteLetterEditComponent } from "./atp-write-letter/politician-write-letter-edit/politician-write-letter-edit.component";


@NgModule({
    declarations: [
        AtpPoliticiansComponent,
        PoliticianWriteLetterComponent,
        PoliticianWriteLetterEditComponent
        
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
