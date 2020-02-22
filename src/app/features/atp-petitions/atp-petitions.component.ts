import { Component, OnInit } from '@angular/core';

export interface PetitionsModel {
    avatar: any;
    name: string;
    event: string;
    date: string;
    address: string;
    desc: string;
    time: string;
    saved: boolean;
    rating: number;
    likes: number;
}

@Component({
  selector: 'atp-petitions',
    templateUrl: './atp-petitions.component.html',
    styleUrls: ['./atp-petitions.component.scss'],
    styles: [
        `
      :host >>> .tooltip-inner {
        border-radius: 25px;
        background-color: #fff;
        border: solid 1px rgba(0, 38, 255, 0.2);
        color: #888;
      }
      :host >>> .tooltip.top .tooltip-arrow:before,
      :host >>> .tooltip.top .tooltip-arrow {
        border-top-color: rgba(0, 38, 255, 0.2);
      }

      :host >>> .tooltip-bottom .tooltip-arrow:before,
      :host >>> .tooltip .tooltip-arrow {
        border-bottom-color: rgba(0, 38, 255, 0.2);
      }
    `
    ]
})
export class AtpPetitionsComponent implements OnInit {

    max: number = 5;
    rate: number = 4;
    isReadonly: boolean = true;
    petitionsList : PetitionsModel [] = [
        {
            avatar: [{ src: '../../../assets/atp/change-logo.png', alt: 'avatar' }],
            name: 'Name of Bill Goes here',
            event: 'Event Name Goes Here',
            date: '23-25 December 2017-5:30 PM',
            address: '123 Main Street, Balboa Center, San Francisco, CA 94201',
            desc: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretium.Integer tincidunt.Cras dapibus.Vivamus elementum semper nisi.Aenean vulputate eleifend tellus.Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.Phasellus viverra nulla ut metus varius laoreet.Quisque rutrum.Aenean imperdiet.',
            time: '30 m',
            saved:false,
            rating: 2,
            likes: 10
        },
        {
            avatar: [{ src: '../../../assets/atp/change-logo.png', alt: 'avatar' }],
            name: 'Name of Bill Goes here',
            event: 'Event Name Goes Here',
            date: '23-25 December 2017-5:30 PM',
            address: '123 Main Street, Balboa Center, San Francisco, CA 94201',
            desc: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretium.Integer tincidunt.Cras dapibus.Vivamus elementum semper nisi.Aenean vulputate eleifend tellus.Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.Phasellus viverra nulla ut metus varius laoreet.Quisque rutrum.Aenean imperdiet.',
            time: '30 m',
            saved: true,
            rating: 2,
            likes: 10
        },
        {
            avatar: [{ src: '../../../assets/atp/change-logo.png', alt: 'avatar' }],
            name: 'Name of Bill Goes here',
            event: 'Event Name Goes Here',
            date: '23-25 December 2017-5:30 PM',
            address: '123 Main Street, Balboa Center, San Francisco, CA 94201',
            desc: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretium.Integer tincidunt.Cras dapibus.Vivamus elementum semper nisi.Aenean vulputate eleifend tellus.Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.Phasellus viverra nulla ut metus varius laoreet.Quisque rutrum.Aenean imperdiet.',
            time: '30 m',
            saved: true,
            rating: 2,
            likes: 10
        },
        {
            avatar: [{ src: '../../../assets/atp/change-logo.png', alt: 'avatar' }],
            name: 'Name of Bill Goes here',
            event: 'Event Name Goes Here',
            date: '23-25 December 2017-5:30 PM',
            address: '123 Main Street, Balboa Center, San Francisco, CA 94201',
            desc: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretium.Integer tincidunt.Cras dapibus.Vivamus elementum semper nisi.Aenean vulputate eleifend tellus.Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.Phasellus viverra nulla ut metus varius laoreet.Quisque rutrum.Aenean imperdiet.',
            time: '30 m',
            saved: false,
            rating: 2,
            likes: 10
        },
    ];

    constructor() { }

    ngOnInit() {
    }

    switchSave(row: PetitionsModel) {
        row.saved = !row.saved;
    }
}
