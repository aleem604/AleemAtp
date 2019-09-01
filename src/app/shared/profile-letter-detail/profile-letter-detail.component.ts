import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'profile-letter-detail',
    templateUrl: './profile-letter-detail.component.html',
    styleUrls: ['./profile-letter-detail.component.scss']
})
export class ProfileLetterDetailComponent implements OnInit {
    letter = {
        id: 10,
        representative: 'Name of Representative',
        avatar: [{ src: '../../../assets/atp/profile.jpg', alt: 'avatar' }],
        name: 'Habbit for Humanity',
        desc: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretium.Integer tincidunt.Cras dapibus.Vivamus elementum semper nisi.Aenean vulputate eleifend tellus.Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.Phasellus viverra nulla ut metus varius laoreet.Quisque rutrum.Aenean imperdiet.',
        time: '30 m',
        replies: 0,
        rating: 2,
        likes: 10,
        replier: [
            {
                repliedBy: 'Name of representative',
                time: '4m',
                des: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretium.Integer tincidunt.Cras dapibus.Vivamus elementum semper nisi.Aenean vulputate eleifend tellus.Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.Phasellus viverra nulla ut metus varius laoreet.Quisque rutrum.Aenean imperdiet.',
                avatar: [{ src: '../../../assets/atp/profile.jpg', alt: 'avatar' }]
            },
            {
                repliedBy: 'Name of representative',
                time: '4m',
                des: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretium.Integer tincidunt.Cras dapibus.Vivamus elementum semper nisi.Aenean vulputate eleifend tellus.Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.Phasellus viverra nulla ut metus varius laoreet.Quisque rutrum.Aenean imperdiet.',
                avatar: [{ src: '.../../../assets/atp/profile.jpg', alt: 'avatar' }]
            },
        ]
    };

    constructor() { }

    ngOnInit() {
    }

}
