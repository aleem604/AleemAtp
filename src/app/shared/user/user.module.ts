

import {NgModule, ModuleWithProviders} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LoginInfoComponent} from "./login-info/login-info.component";
import {LogoutComponent} from "./logout/logout.component";
import { LoginLinkComponent } from "./login-link/login-link.component";


@NgModule({
  imports: [CommonModule],
  declarations: [LoginInfoComponent, LogoutComponent,LoginLinkComponent],
  exports: [LoginInfoComponent, LogoutComponent, LoginLinkComponent]
})
export class UserModule{}
