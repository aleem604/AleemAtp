export class AtpSocialUser {
	constructor(private i: string, private em: string, private nam: string, private photo: string, private fname: string, private lname: string, private pr: string) {
		this.id = i;
		this.email = em;
		this.name = nam;
		this.photoUrl = photo;
		this.firstName = fname;
		this.lastName = lname;
		this.provider = pr;
	}
    id: string;
    email: string;
    name: string;
    photoUrl: string;
    firstName: string;
    lastName: string;
    provider: string;
}
