import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'user-header',
	templateUrl: './user-header.component.html',
    styleUrls: ['./user-header.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class UserHeaderComponent implements OnInit {

	constructor() {}

	ngOnInit() {
	}

}
