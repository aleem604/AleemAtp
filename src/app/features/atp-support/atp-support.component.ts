import { Component, OnInit } from '@angular/core';


export interface SupportModel {
    website: string,
    avatar: [{src:string, alt:string}],
    name: string,
    desc: string,
    time: string,
    date: string,
    rating: number,
    likes: number,
    supported: boolean
}


@Component({
    selector: 'atp-support',
    templateUrl: './atp-support.component.html',
    styleUrls: ['./atp-support.component.scss'],
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
export class AtpSupportComponent implements OnInit {

    max: number = 5;
    rate: number = 4;
    isReadonly: boolean = true;
    supports: Array<SupportModel> = [
        {
            website: 'americataxpayer.com',
            avatar: [{ src: '../../../assets/atp/presbyterian-women-logo.png', alt: 'avatar' }],
            name: 'Habbit for Humanity',
            desc: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretium.Integer tincidunt.Cras dapibus.Vivamus elementum semper nisi.Aenean vulputate eleifend tellus.Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.Phasellus viverra nulla ut metus varius laoreet.Quisque rutrum.Aenean imperdiet.',
            time: '30 m',
            date: '10 February 2017',
            rating: 2,
            likes: 10,
            supported: false
        },
        {
            website: 'americataxpayer.com',
            avatar: [{ src: '../../../assets/atp/presbyterian-women-logo.png', alt: 'avatar' }],
            name: 'Habbit for Humanity',
            desc: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretium.Integer tincidunt.Cras dapibus.Vivamus elementum semper nisi.Aenean vulputate eleifend tellus.Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.Phasellus viverra nulla ut metus varius laoreet.Quisque rutrum.Aenean imperdiet.',
            time: '2.5 Hr',
            date: '10 February 2017',
            rating: 3,
            likes: 2,
            supported: false
        },
        {
            website: 'americataxpayer.com',
            avatar: [{ src: '../../../assets/atp/presbyterian-women-logo.png', alt: 'avatar' }],
            name: 'WWF12',
            desc: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretium.Integer tincidunt.Cras dapibus.Vivamus elementum semper nisi.Aenean vulputate eleifend tellus.Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.Phasellus viverra nulla ut metus varius laoreet.Quisque rutrum.Aenean imperdiet.',
            time: '45 m',
            date: '10 February 2017',
            rating: 5,
            likes: 12,
            supported: true
        },
        {
            website: 'americataxpayer.com',
            avatar: [{ src: '../../../assets/atp/presbyterian-women-logo.png', alt: 'avatar' }],
            name: 'Habbit for Humanity',
            desc: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretium.Integer tincidunt.Cras dapibus.Vivamus elementum semper nisi.Aenean vulputate eleifend tellus.Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.Phasellus viverra nulla ut metus varius laoreet.Quisque rutrum.Aenean imperdiet.',
            time: '30 m',
            date: '10 February 2017',
            rating: 2,
            likes: 10,
            supported: true
        },
        {
            website: 'americataxpayer.com',
            avatar: [{ src: '../../../assets/atp/presbyterian-women-logo.png', alt: 'avatar' }],
            name: 'Habbit for Humanity',
            desc: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretium.Integer tincidunt.Cras dapibus.Vivamus elementum semper nisi.Aenean vulputate eleifend tellus.Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.Phasellus viverra nulla ut metus varius laoreet.Quisque rutrum.Aenean imperdiet.',
            time: '2.5 Hr',
            date: '10 February 2017',
            rating: 3,
            likes: 2,
            supported: false
        },
        {
            website: 'americataxpayer.com',
            avatar: [{ src: '../../../assets/atp/presbyterian-women-logo.png', alt: 'avatar' }],
            name: 'WWF12',
            desc: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretium.Integer tincidunt.Cras dapibus.Vivamus elementum semper nisi.Aenean vulputate eleifend tellus.Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.Phasellus viverra nulla ut metus varius laoreet.Quisque rutrum.Aenean imperdiet.',
            time: '45 m',
            date: '10 February 2017',
            rating: 5,
            likes: 12,
            supported: true
        },
        {
            website: 'americataxpayer.com',
            avatar: [{ src: '../../../assets/atp/presbyterian-women-logo.png', alt: 'avatar' }],
            name: 'Habbit for Humanity',
            desc: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretium.Integer tincidunt.Cras dapibus.Vivamus elementum semper nisi.Aenean vulputate eleifend tellus.Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.Phasellus viverra nulla ut metus varius laoreet.Quisque rutrum.Aenean imperdiet.',
            time: '30 m',
            date: '10 February 2017',
            rating: 2,
            likes: 10,
            supported: true
        },
        {
            website: 'americataxpayer.com',
            avatar: [{ src: '../../../assets/atp/presbyterian-women-logo.png', alt: 'avatar' }],
            name: 'Habbit for Humanity',
            desc: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretium.Integer tincidunt.Cras dapibus.Vivamus elementum semper nisi.Aenean vulputate eleifend tellus.Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.Phasellus viverra nulla ut metus varius laoreet.Quisque rutrum.Aenean imperdiet.',
            time: '2.5 Hr',
            date: '10 February 2017',
            rating: 3,
            likes: 2,
            supported: true
        },
        {
            website: 'americataxpayer.com',
            avatar: [{ src: '../../../assets/atp/presbyterian-women-logo.png', alt: 'avatar' }],
            name: 'WWF12',
            desc: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretium.Integer tincidunt.Cras dapibus.Vivamus elementum semper nisi.Aenean vulputate eleifend tellus.Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.Phasellus viverra nulla ut metus varius laoreet.Quisque rutrum.Aenean imperdiet.',
            time: '45 m',
            date: '10 February 2017',
            rating: 5,
            likes: 12,
            supported: true
        },
        {
            website: 'americataxpayer.com',
            avatar: [{ src: '../../../assets/atp/presbyterian-women-logo.png', alt: 'avatar' }],
            name: 'Habbit for Humanity',
            desc: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretium.Integer tincidunt.Cras dapibus.Vivamus elementum semper nisi.Aenean vulputate eleifend tellus.Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.Phasellus viverra nulla ut metus varius laoreet.Quisque rutrum.Aenean imperdiet.',
            time: '30 m',
            date: '10 February 2017',
            rating: 2,
            likes: 10,
            supported: true
        },
        {
            website: 'americataxpayer.com',
            avatar: [{ src: '../../../assets/atp/presbyterian-women-logo.png', alt: 'avatar' }],
            name: 'Habbit for Humanity',
            desc: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretium.Integer tincidunt.Cras dapibus.Vivamus elementum semper nisi.Aenean vulputate eleifend tellus.Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.Phasellus viverra nulla ut metus varius laoreet.Quisque rutrum.Aenean imperdiet.',
            time: '2.5 Hr',
            date: '10 February 2017',
            rating: 3,
            likes: 2,
            supported: true
        }
    ];
    public state: any = {
        tabs: {
            demo1: 0,
            demo2: 'tab-r1',
            demo3: 'hr1',
            demo4: 'AA',
            demo5: 'iss1',
            demo6: 'l1',
            demo7: 'tab1',
            demo8: 'hb1',
            demo9: 'A1',
            demo10: 'is1'
        }
    };

    constructor() { }

    ngOnInit() {
    }

    switchSupport(support: SupportModel) {
        support.supported = !support.supported;
    }

}
