import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AtpUserRouting } from "./atp-user.routing";
import { AtpUserComponent } from "./user.component";
import { SharedModule } from "@app/shared/shared.module";
import * as _userIndex from './index';

@NgModule({
    imports: [
        CommonModule,
        AtpUserRouting,
        SharedModule
    ],
    declarations: [_userIndex.UserHeaderComponent, _userIndex.UserFooterComponent]
})
export class AtpUserModule {
}
