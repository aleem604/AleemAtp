import {Inject, Injectable, InjectionToken} from '@angular/core';
import {isNullOrUndefined} from 'util';
import {Subject} from 'rxjs';
import {filter} from 'rxjs/operators';
import {JwksValidationHandler, OAuthService} from 'angular-oauth2-oidc';
import {AuthUser} from '../models/auth-user.model';
import {Router} from '@angular/router';
import { SessionService } from '@app/core/services/atp/session.service';
import { environment } from '@env/environment';

export const AuthorityUrl = new InjectionToken<string>('AuthorityUrl');

@Injectable()
export class AuthService {
  private _authSource = new Subject();
  private _authUser: AuthUser = null;

  public onAuthenticated = this._authSource.asObservable();

  constructor(private _oauthService: OAuthService,
              private _sessionService: SessionService,
              private _router: Router,
              @Inject(AuthorityUrl) private _authorityUrl: string) {
  }

  public configureAuthentication() {
    console.log('Initializing authentication');
    this._oauthService.issuer = this._authorityUrl;
    this._oauthService.tokenValidationHandler = new JwksValidationHandler();
    this._oauthService.redirectUri = window.location.origin + '/client-signin-oidc';
    this._oauthService.silentRefreshRedirectUri = window.location.origin + '/assets/silent-refresh.html';
    this._oauthService.postLogoutRedirectUri = window.location.origin;
	this._oauthService.clientId = environment.authConfig.clientId
    this._oauthService.scope = environment.authConfig.scope;


	this._oauthService.clearHashAfterLogin = false;

    this._oauthService.events.subscribe(e => {
      console.log('oauth/oidc event', e);
    });

    this._oauthService.events.pipe(filter(e => e.type === 'session_terminated')).subscribe(e => {
      console.log('Your session has been terminated!');
    });

    this._oauthService.loadDiscoveryDocument().then(() => {
      // This method just tries to parse the token(s) within the url when
      // the auth-server redirects the user back to the web-app
      // It dosn't send the user the the login page
      this._oauthService.tryLogin({
        onTokenReceived: (context) => {
          console.log('Token received');
          this.authenticated();
        }
      }).then(() => {
        if (!this._oauthService.hasValidIdToken()) {
          console.log('No valid token');
          this._oauthService.initImplicitFlow(`{"returnTo": ${window.location.href}}`,{audience:'ATP.Service'});
        } else {
          this._sessionService.startSessionTimeout();
          this._sessionService.onSessionTimedOut.subscribe(() => {
            this.signOut(true);
          });
          this._oauthService.setupAutomaticSilentRefresh();
        }
      });
    });
  }

  public authenticated() {
    this._authSource.next();
  }

  public hasRoles(reqRoles: string[]): boolean {
    if (!reqRoles || !reqRoles.length)
      return true;

    let found: boolean;
    for (const role of reqRoles) {
      const idx = this.AuthUser.roles.indexOf(role);
      found = idx > -1;
      if (found)
        break;
    }
    return found;
  }


  public get displayName(): string {
    return this.AuthUser ? this.AuthUser.displayName : '';
  }

  public get userId(): number {
    return this.AuthUser ? this.AuthUser.userId : null;
  }

  public get userRoles(): string[] {
    return this.AuthUser ? this.AuthUser.roles : [];
  }

  public getBearerToken(): string {
    const token = this._oauthService.getAccessToken();
    if (isNullOrUndefined(token)) {
      return null;
    }
    return token;
  }

  public getCurrentUser(): AuthUser {
    return this.AuthUser;
  }

  public getUserRoles(): string[] {
    return this.AuthUser ? this.AuthUser.roles : [];
  }

  public signOut(confimed: boolean = false) {
    if (confimed)
      this._oauthService.logOut();
    this._router.navigate(['/logout-confirm']);
  }

  public isAuthenticated(): boolean {
    return this._oauthService.hasValidAccessToken();
  }

  private get AuthUser(): AuthUser {
    if (this._authUser)
      return this._authUser;

    this._authUser = this.buildAuthUser(this._oauthService.getIdentityClaims());
    return this._authUser;
  }

  private buildAuthUser(identityClaims: any): AuthUser {
    console.log('claims', identityClaims);
    const user = new AuthUser();
    user.userId = identityClaims.sub;
    user.userName = identityClaims.name;
    user.displayName = identityClaims.given_name;
    user.roles = identityClaims.role;
    console.log('auth user:', user);
    return user;
  }
}
