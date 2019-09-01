import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LocalStorageService } from './local-storage.service';
import { ErrorHandlerService } from '../error-handler/error-handler.service';
import { SocialUser } from 'angularx-social-login';
import { TpUser, UserSignupApiResponse, SignupUserModel, ApiResponse, SFToken, SFUserInfo } from '@app/core/models/tpuser.model';
import { ApiEndpoint } from '@app/core/models/api-endpoint';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
	private currentUserSubject: BehaviorSubject<TpUser>;
	public currentUser: Observable<TpUser>;
	apiEndPoint = ApiEndpoint.Atp_Endpoint;
	socialUser: SocialUser;

	constructor(private http: HttpClient,
		private errorHandler: ErrorHandlerService, private router: Router, private localStorageService: LocalStorageService) {
		this.populateUser();
	}

	populateUser(): void {
		const currentUser = this.localStorageService.getFromLocalStorage('currentUser');
		this.currentUserSubject = currentUser ? new BehaviorSubject<TpUser>(JSON.parse(currentUser)) : new BehaviorSubject<TpUser>(new TpUser());
		this.currentUser = this.currentUserSubject.asObservable();
	}

	public get currentUserValue(): TpUser {
		return this.currentUserSubject.value;
	}

	login(email: string, password: string) {
		return this.http.post<any>(`${this.apiEndPoint}/user/login`, { email: email, password: password })
			.pipe(
				retry(1), catchError(this.errorHandler.handleError),
				map((data: UserSignupApiResponse) => {
					this.clearCache();
					if (data.success && data.data.access_token !== '') {
						this.localStorageService.storeOnLocalStorage(JSON.stringify(data.data));
						this.currentUserSubject.next(data.data);
					}
					return data;
				}));
	}

	signup(signupModel: SignupUserModel) {
		return this.http.post<any>(`${this.apiEndPoint}/user/signup`, signupModel)
			.pipe(
				retry(1), catchError(this.errorHandler.handleError),
				map((response) => response));
	}

	signupSocial(socialUser: SocialUser):Observable<ApiResponse> {
		return this.http.post<any>(`${this.apiEndPoint}/user/signup_social`, socialUser)
			.pipe(
				retry(1), catchError(this.errorHandler.handleError),
				map((response:ApiResponse) => response));
	}

	isEmailRegisterd(email: string): any {
		return this.http.post<any>(`${this.apiEndPoint}/user/emailExists`, { 'email': email })
			.pipe(
				retry(1), catchError(this.errorHandler.handleError),
				map((response) => response));
	}


	authenticate() {
		const tinUser = this.currentUserValue;

		var helper = new JwtHelperService();
		if (tinUser == null || this.readToken() == null || helper.isTokenExpired(this.currentUserValue.access_token)) {
			localStorage.removeItem('currentUser');
			this.router.navigate(['/user/login']);
		}
	}

	isAuthenticated(): any {
		const tinUser = this.currentUserValue;
		var helper = new JwtHelperService();
		if (tinUser == null || this.readToken() == null || helper.isTokenExpired(this.currentUserValue.access_token)) {
			return false;
		}
		return true;
	}

	readToken(): SFToken {
		try {
			var helper = new JwtHelperService();
			return helper.decodeToken(this.currentUserValue.access_token) as SFToken;
		}
		catch (e) {
			return null;
		}
	}

	getCurrentUserInfo(): Observable<SFUserInfo> {
		if (this.currentUserValue.access_token) {
			return this.http.get<any>(`${this.apiEndPoint}/Sitefinity/Authenticate/OpenID/connect/userinfo`, {
				headers: new HttpHeaders()
					.set('Content-Type', 'application/x-www-form-urlencoded')
					.set('Authorization', `Bearer ${this.currentUserValue.access_token}`)
			})
				.pipe(
					retry(1), catchError(this.errorHandler.handleError),
					map((user) => {
						return user;
					}));
		}
		return new Observable<SFUserInfo>();
	}

	clearCache() {
		localStorage.removeItem('currentUser');
		this.currentUserSubject.next(null);
	}

	logout() {
		// remove user from local storage to log user out
		localStorage.removeItem('currentUser');
		this.currentUserSubject.next(null);
		this.router.navigate(['/']);
	}
}
