import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgSelect2Module } from 'ng-select2';

import { AtpRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ToastrModule } from 'ngx-toastr';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { AuthServiceConfig } from 'angularx-social-login';
import { provideConfig } from './shared/atp-user-auth/social-config/social-config';
import { AuthorityUrl } from './shared/atp-user-auth/services/auth.service';
import { environment } from '@env/environment';
import { AlertModule, ModalModule } from 'ngx-bootstrap';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AlertModule.forRoot(),
        ModalModule.forRoot(),
        AtpRoutingModule,
        SharedModule,
        NgSelect2Module,
        CoreModule,
        ToastrModule.forRoot({
            timeOut: 10000,
            positionClass: 'toast-top-right',
            preventDuplicates: true,
        }),
      LoggerModule.forRoot({ serverLoggingUrl: '/api/v1/logs', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.ERROR })
    ],
    providers: [
        {
            provide: AuthorityUrl,
            useValue: environment.appConfig.authenticationAuthority
        },
        {
            provide: AuthServiceConfig,
            useFactory: provideConfig
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
