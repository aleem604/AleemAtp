import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtpLoginRoutingModule } from './atp-login-routing.module';
import { AtpLoginComponent } from './atp-login.component';
import { SharedModule } from '@app/shared/shared.module';
import { SocialLoginModule } from 'angularx-social-login';

@NgModule({
  imports: [
      CommonModule,
      SharedModule,
      SocialLoginModule,
    AtpLoginRoutingModule
  ],
  declarations: [AtpLoginComponent]
})
export class AtpLoginModule { }
