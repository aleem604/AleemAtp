export class SignupUserModel {
	username: string;
	password: string;
	firstName: string;
	lastName: string;
	email: string;
	secretQuestion: string;
	secretAnswer: string;
	isApproved: true;
}

export class ApiResponse {
	success: boolean;
	data: any;
	errors: [] = [];
}

export class UserSignupApiResponse {
	success: boolean;
	data: UserSignupResponse;
	errors: [] = [];
}


export class UserSignupResponse {
	access_token: string;
	expires_in: 3600;
	token_type: string;
}

export class TpUser {
	expires_in: number;
	token?: string;
	refresh_token?: string;
	access_token?: string;
	tokey_type?: string;
}

export class CurrentUser {
	email: string;
	given_name: string;
	family_name: string;
	nickname: string;
	name: string;
	picture: string;
}

/*------------------- SF Models ------------------------------------- */
export class SFUserInfo {
	sub: string;
	prefferred_username: string;
	updated_at: string;
	email: string;
	email_verified: string;
	nickname: string;
	given_name: string;
	family_name: string;
	picture: string;
}

export class SFToken {
	iss: string;
	aud: string;
	rces: string;
	exp: number;
	nbf: number;
	client_id: string;
	scope: string;
	sub: string;
	auth_time: number;
	idp: string;
}
