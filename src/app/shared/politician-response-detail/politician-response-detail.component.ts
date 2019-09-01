import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'politician-response-detail',
    templateUrl: './politician-response-detail.component.html',
    styleUrls: ['./politician-response-detail.component.scss']
})
export class PoliticianResponseDetailComponent implements OnInit {
    res = {
        avatar: [{ src: '../../../assets/atp/profile.jpg', alt: 'avatar' }],
        name: 'Jennifer Miller',
        desc: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretium.Integer tincidunt.Cras dapibus.Vivamus elementum semper nisi.Aenean vulputate eleifend tellus.Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.Phasellus viverra nulla ut metus varius laoreet.Quisque rutrum.Aenean imperdiet.',
        time: '30 m',
        rating: 5,
        rating1: 4,
        rating2: 3,
        likes: 10
    };

    constructor() { }

    ngOnInit() {
    }

}
