import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtpRegisterRoutingModule } from './atp-register-routing.module';
import { AtpRegisterComponent } from './atp-register.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [
      CommonModule,
      SharedModule,
      AtpRegisterRoutingModule
  ],
    declarations: [AtpRegisterComponent]
})
export class AtpRegisterModule { }
