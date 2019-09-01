import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService, GoogleLoginProvider, FacebookLoginProvider, SocialUser } from 'angularx-social-login';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as _ from 'lodash';
import { NgxSpinnerService } from "ngx-spinner";
import { AuthenticationService } from '@app/core/services';
import { BaseComponent } from '@app/core/models/BaseComponent';
import { MustMatch } from '@app/core/models/user-helper';
import { UserSignupApiResponse, ApiResponse } from '@app/core/models/tpuser.model';

@Component({
    selector: 'atp-register',
    templateUrl: './atp-register.component.html',
    styleUrls: ['./atp-register.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class AtpRegisterComponent extends BaseComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;
    debouncer: any;
    intercepting = false;
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
        this.registerForm = this.formBuilder.group({
            email: ['', Validators.compose([Validators.required, Validators.email]), this.isEmailUnique.bind(this)],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required]
        }, {
                validator: MustMatch('password', 'confirmPassword')
            });
    }

    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.showLoading();
        this.authService.signup(this.registerForm.value).subscribe((resp: UserSignupApiResponse) => {
            this.hideLoading();
            if (resp.success) {
                this.showSuccess('Success', 'You have sucessfully registred to portal');
                this.router.navigate(['/atp/login']);
            } else {
                this.showError(_.first(resp.errors));
            }
        })

    }

    isEmailUnique(control: FormControl): any {
        clearTimeout(this.debouncer);
        this.intercepting = true;
        return new Promise(resolve => {
            this.debouncer = setTimeout(() => {
                this.authService.isEmailRegisterd(control.value).subscribe((res: ApiResponse) => {
                    if (res.success) {
                        resolve(null);
                    } else {
                        resolve({ 'isEmailUnique': true });
                    }
                }, (err) => {
                    resolve({ 'isEmailUnique': true });
                }, () => {
                    this.intercepting = false;
                });
            }, 1000);
        });
    }

    signUpWithGoogle(): void {

        this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user) => {
            this.showLoading();
            this.authService.signupSocial(user).subscribe((res: ApiResponse) => {
                if (_.first(res.errors) === 'Email already exists.') {
                    this.showInfo('Info', 'You are already registered.');
                    this.router.navigate(['/']);
                } else if (res.success) {
                    this.showSuccess('Success', 'You are successfuly registered.');
                    this.router.navigate(['/']);
                } else if (!res.success) {
                    this.showError('Error', _.first(res.errors));
                }
            },
                () => { },
                () => {
                    this.hideLoading();
                });
        });
    }

    signUpWithFB(): void {

        this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then((user) => {
            this.showLoading();
            this.authService.signupSocial(user).subscribe((res: ApiResponse) => {
                if (_.first(res.errors) === 'Email already exists.') {
                    this.showInfo('Info', 'You are already registered.');
                    this.router.navigate(['/']);
                } else if (res.success) {
                    this.showSuccess('Success', 'You are successfuly registered.');
                    this.router.navigate(['/']);
                } else if (!res.success) {
                    this.showError('Error', _.first(res.errors));
                }
            },
                () => { },
                () => {
                    this.hideLoading();
                });
        });
    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
}
