import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SocialUser, AuthService, GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider } from 'angularx-social-login';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as _ from 'lodash';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthenticationService } from '@app/core/services';
import { BaseComponent } from '@app/core/models/BaseComponent';
import { UserSignupApiResponse, ApiResponse } from '@app/core/models/tpuser.model';

@Component({
	selector: 'atp-login',
	templateUrl: './atp-login.component.html',
	styleUrls: ['./atp-login.component.scss'],
	encapsulation: ViewEncapsulation.Emulated
})
export class AtpLoginComponent extends BaseComponent implements OnInit {
	loginForm: FormGroup;
	submitted = false;
	user: SocialUser;

	constructor(
		private router: Router,
		public toaster: ToastrService,
		private authService: AuthenticationService,
		private socialAuthService: AuthService,
		spinner: NgxSpinnerService,
		private formBuilder: FormBuilder) {
		super(toaster, spinner);
	}

	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required, Validators.minLength(6)]],
		});
	}

	get f() { return this.loginForm.controls; }

	onSubmit() {
		this.submitted = true;

		// stop here if form is invalid
		if (this.loginForm.invalid) {
			return;
		}

		this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
			.subscribe((resp: UserSignupApiResponse) => {
				if (this.authService.isAuthenticated()) {
					this.router.navigate(['/']);
				} else {
					this.showError('Error!', _.first(resp.errors));
				}
			});
	}

	onReset() {
		this.submitted = false;
		this.loginForm.reset();
	}

	signInWithFB(): void {
		
		this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then((user) => {
			this.showLoading();
			this.authService.signupSocial(user).subscribe((res: ApiResponse) => {
				if (res.success || _.first(res.errors) === 'Email already exists.') {
					this.router.navigate(['/']);
				} else if (!res.success) {
					this.showError('Error', _.first(res.errors));
				}
			}, () => { }, () => { this.hideLoading(); });
		});
	}

	signInWithGoogle(): void {
		
		this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user) => {
			this.showLoading();
			this.authService.signupSocial(user).subscribe((res: ApiResponse) => {
				if (res.success || _.first(res.errors) === 'Email already exists.') {
					this.router.navigate(['/']);
				} else if (!res.success) {
					this.showError('Error', _.first(res.errors));
				}
			}, () => { }, () => { this.hideLoading(); });
		});
	}

	signInWithLinkedIn(): void {
		this.socialAuthService.signIn(LinkedInLoginProvider.PROVIDER_ID);
	}
}
