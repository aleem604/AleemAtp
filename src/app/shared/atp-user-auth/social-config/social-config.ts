import { AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";


let config = new AuthServiceConfig([
	{
		id: GoogleLoginProvider.PROVIDER_ID,
		provider: new GoogleLoginProvider("1077926933514-4qrhb9cvpbqhck7drho9gdjigfraeh61.apps.googleusercontent.com")
	},
	{
		id: FacebookLoginProvider.PROVIDER_ID,
	  provider: new FacebookLoginProvider("566794310519061")
		//provider: new FacebookLoginProvider('561602290896109')
		//provider: new FacebookLoginProvider('815897348500458')
	}
]);

//const config = new AuthServiceConfig([
//	{
//		id: GoogleLoginProvider.PROVIDER_ID,
//		provider: new GoogleLoginProvider('1077926933514-4qrhb9cvpbqhck7drho9gdjigfraeh61.apps.googleusercontent.com')
//	},
//	{
//		id: FacebookLoginProvider.PROVIDER_ID,
//		provider: new FacebookLoginProvider('561602290896109')
//	},
//	{
//		id: LinkedInLoginProvider.PROVIDER_ID,
//		provider: new LinkedInLoginProvider('78iqy5cu2e1fgr')
//	}
//]);

export function provideConfig() {
	return config;
}
