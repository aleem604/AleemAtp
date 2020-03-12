import { Component, OnInit, Input } from '@angular/core';
import { ArticleModel } from '../profile-petitions/profile-petitions.component';

@Component({
    selector: 'profile-articles',
    templateUrl: './profile-articles.component.html',
    styleUrls: ['./profile-articles.component.scss'],
    styles: [
        `
      :host >>> table > tr > td> .tooltip-inner {
        border-radius: 25px;
        background-color: #fff;
        border: solid 1px rgba(0, 38, 255, 0.2);
        color: #888;
      }
      :host >>> table > tr > td> .tooltip.top .tooltip-arrow:before,
      :host >>> table > tr > td> .tooltip.top .tooltip-arrow {
        border-top-color: rgba(0, 38, 255, 0.2);
      }

      :host >>> table > tr > td> .tooltip-bottom .tooltip-arrow:before,
      :host >>> table > tr > td> .tooltip .tooltip-arrow {
        border-bottom-color: rgba(0, 38, 255, 0.2);
      }
    `
    ]
})
export class ProfileArticlesComponent implements OnInit {
    articles = [
        {
            id: 10021,
            avatar: [{ src: '../../../assets/atp/habitat-for-humanity-logo.png', alt: 'avatar' }],
            name: 'Habbit for Humanity',
            desc: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretium.Integer tincidunt.Cras dapibus.Vivamus elementum semper nisi.Aenean vulputate eleifend tellus.Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.Phasellus viverra nulla ut metus varius laoreet.Quisque rutrum.Aenean imperdiet.',
            time: '30 m',
            images: [
                {
                    src: '../../../assets/atp/presbyterian-women.jpg', alt: 'presbyterian women'
                },
                {
                    src: '../../../assets/atp/presbyterian-women2.jpg', alt: 'presbyterian 2 women'
                }
            ],
            rating: 2,
            likes: 10
        },
        {
            id: 10020,
            avatar: [{ src: '../../../assets/atp/habitat-for-humanity-logo.png', alt: 'avatar' }],
            name: 'Habbit for Humanity',
            desc: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretium.Integer tincidunt.Cras dapibus.Vivamus elementum semper nisi.Aenean vulputate eleifend tellus.Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.Phasellus viverra nulla ut metus varius laoreet.Quisque rutrum.Aenean imperdiet.',
            time: '2.5 Hr',
            images: [

            ],
            rating: 3,
            likes: 2
        },
        {
            id: 10019,
            avatar: [{ src: '../../../assets/atp/wwf-logo.png', alt: 'avatar' }],
            name: 'WWF12',
            desc: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretium.Integer tincidunt.Cras dapibus.Vivamus elementum semper nisi.Aenean vulputate eleifend tellus.Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.Phasellus viverra nulla ut metus varius laoreet.Quisque rutrum.Aenean imperdiet.',
            time: '45 m',
            images: [
                {
                    src: '../../../assets/atp/wwf.jpg', alt: 'wwf women'
                }
            ],
            rating: 5,
            likes: 12
        },
        {
            id: 10018,
            avatar: [{ src: '../../../assets/atp/habitat-for-humanity-logo.png', alt: 'avatar' }],
            name: 'Habbit for Humanity',
            desc: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretium.Integer tincidunt.Cras dapibus.Vivamus elementum semper nisi.Aenean vulputate eleifend tellus.Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.Phasellus viverra nulla ut metus varius laoreet.Quisque rutrum.Aenean imperdiet.',
            time: '30 m',
            images: [
                {
                    src: '../../../assets/atp/presbyterian-women.jpg', alt: 'presbyterian women'
                },
                {
                    src: '../../../assets/atp/presbyterian-women2.jpg', alt: 'presbyterian 2 women'
                }
            ],
            rating: 2,
            likes: 10
        },
        {
            id: 10017,
            avatar: [{ src: '../../../assets/atp/habitat-for-humanity-logo.png', alt: 'avatar' }],
            name: 'Habbit for Humanity',
            desc: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretium.Integer tincidunt.Cras dapibus.Vivamus elementum semper nisi.Aenean vulputate eleifend tellus.Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.Phasellus viverra nulla ut metus varius laoreet.Quisque rutrum.Aenean imperdiet.',
            time: '2.5 Hr',
            images: [

            ],
            rating: 3,
            likes: 2
        },
        {
            id: 10016,
            avatar: [{ src: '../../../assets/atp/wwf-logo.png', alt: 'avatar' }],
            name: 'WWF12',
            desc: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretium.Integer tincidunt.Cras dapibus.Vivamus elementum semper nisi.Aenean vulputate eleifend tellus.Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.Phasellus viverra nulla ut metus varius laoreet.Quisque rutrum.Aenean imperdiet.',
            time: '45 m',
            images: [
                {
                    src: '../../../assets/atp/wwf.jpg', alt: 'wwf women'
                }
            ],
            rating: 5,
            likes: 12
        },
        {
            id: 10015,
            avatar: [{ src: '../../../assets/atp/habitat-for-humanity-logo.png', alt: 'avatar' }],
            name: 'Habbit for Humanity',
            desc: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretium.Integer tincidunt.Cras dapibus.Vivamus elementum semper nisi.Aenean vulputate eleifend tellus.Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.Phasellus viverra nulla ut metus varius laoreet.Quisque rutrum.Aenean imperdiet.',
            time: '30 m',
            images: [
                {
                    src: '../../../assets/atp/presbyterian-women.jpg', alt: 'presbyterian women'
                },
                {
                    src: '../../../assets/atp/presbyterian-women2.jpg', alt: 'presbyterian 2 women'
                }
            ],
            rating: 2,
            likes: 10
        },
        {
            id: 10014,
            avatar: [{ src: '../../../assets/atp/habitat-for-humanity-logo.png', alt: 'avatar' }],
            name: 'Habbit for Humanity',
            desc: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretium.Integer tincidunt.Cras dapibus.Vivamus elementum semper nisi.Aenean vulputate eleifend tellus.Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.Phasellus viverra nulla ut metus varius laoreet.Quisque rutrum.Aenean imperdiet.',
            time: '2.5 Hr',
            images: [

            ],
            rating: 3,
            likes: 2
        },
        {
            id: 10013,
            avatar: [{ src: '../../../assets/atp/wwf-logo.png', alt: 'avatar' }],
            name: 'WWF12',
            desc: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretium.Integer tincidunt.Cras dapibus.Vivamus elementum semper nisi.Aenean vulputate eleifend tellus.Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.Phasellus viverra nulla ut metus varius laoreet.Quisque rutrum.Aenean imperdiet.',
            time: '45 m',
            images: [
                {
                    src: '../../../assets/atp/wwf.jpg', alt: 'wwf women'
                }
            ],
            rating: 5,
            likes: 12
        },
        {
            id: 10012,
            avatar: [{ src: '../../../assets/atp/habitat-for-humanity-logo.png', alt: 'avatar' }],
            name: 'Habbit for Humanity',
            desc: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretium.Integer tincidunt.Cras dapibus.Vivamus elementum semper nisi.Aenean vulputate eleifend tellus.Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.Phasellus viverra nulla ut metus varius laoreet.Quisque rutrum.Aenean imperdiet.',
            time: '30 m',
            images: [
                {
                    src: '../../../assets/atp/presbyterian-women.jpg', alt: 'presbyterian women'
                },
                {
                    src: '../../../assets/atp/presbyterian-women2.jpg', alt: 'presbyterian 2 women'
                }
            ],
            rating: 2,
            likes: 10
        },
        {
            id: 10011,
            avatar: [{ src: '../../../assets/atp/habitat-for-humanity-logo.png', alt: 'avatar' }],
            name: 'Habbit for Humanity',
            desc: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretium.Integer tincidunt.Cras dapibus.Vivamus elementum semper nisi.Aenean vulputate eleifend tellus.Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.Phasellus viverra nulla ut metus varius laoreet.Quisque rutrum.Aenean imperdiet.',
            time: '2.5 Hr',
            images: [

            ],
            rating: 3,
            likes: 2
        },
        {
            id: 10010,
            avatar: [{ src: '../../../assets/atp/wwf-logo.png', alt: 'avatar' }],
            name: 'WWF12',
            desc: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretium.Integer tincidunt.Cras dapibus.Vivamus elementum semper nisi.Aenean vulputate eleifend tellus.Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.Phasellus viverra nulla ut metus varius laoreet.Quisque rutrum.Aenean imperdiet.',
            time: '45 m',
            images: [
                {
                    src: '../../../assets/atp/wwf.jpg', alt: 'wwf women'
                }
            ],
            rating: 5,
            likes: 12
        },
        {
            id: 10009,
            avatar: [{ src: '../../../assets/atp/habitat-for-humanity-logo.png', alt: 'avatar' }],
            name: 'Habbit for Humanity',
            desc: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretium.Integer tincidunt.Cras dapibus.Vivamus elementum semper nisi.Aenean vulputate eleifend tellus.Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.Phasellus viverra nulla ut metus varius laoreet.Quisque rutrum.Aenean imperdiet.',
            time: '30 m',
            images: [
                {
                    src: '../../../assets/atp/presbyterian-women.jpg', alt: 'presbyterian women'
                },
                {
                    src: '../../../assets/atp/presbyterian-women2.jpg', alt: 'presbyterian 2 women'
                }
            ],
            rating: 2,
            likes: 10
        },
        {
            id: 10008,
            avatar: [{ src: '../../../assets/atp/habitat-for-humanity-logo.png', alt: 'avatar' }],
            name: 'Habbit for Humanity',
            desc: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretium.Integer tincidunt.Cras dapibus.Vivamus elementum semper nisi.Aenean vulputate eleifend tellus.Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.Phasellus viverra nulla ut metus varius laoreet.Quisque rutrum.Aenean imperdiet.',
            time: '2.5 Hr',
            images: [

            ],
            rating: 3,
            likes: 2
        },
        {
            id: 10007,
            avatar: [{ src: '../../../assets/atp/wwf-logo.png', alt: 'avatar' }],
            name: 'WWF12',
            desc: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretium.Integer tincidunt.Cras dapibus.Vivamus elementum semper nisi.Aenean vulputate eleifend tellus.Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.Phasellus viverra nulla ut metus varius laoreet.Quisque rutrum.Aenean imperdiet.',
            time: '45 m',
            images: [
                {
                    src: '../../../assets/atp/wwf.jpg', alt: 'wwf women'
                }
            ],
            rating: 5,
            likes: 12
        },
        {
            id: 10006,
            avatar: [{ src: '../../../assets/atp/habitat-for-humanity-logo.png', alt: 'avatar' }],
            name: 'Habbit for Humanity',
            desc: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretium.Integer tincidunt.Cras dapibus.Vivamus elementum semper nisi.Aenean vulputate eleifend tellus.Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.Phasellus viverra nulla ut metus varius laoreet.Quisque rutrum.Aenean imperdiet.',
            time: '30 m',
            images: [
                {
                    src: '../../../assets/atp/presbyterian-women.jpg', alt: 'presbyterian women'
                },
                {
                    src: '../../../assets/atp/presbyterian-women2.jpg', alt: 'presbyterian 2 women'
                }
            ],
            rating: 2,
            likes: 10
        },
        {
            id: 10005,
            avatar: [{ src: '../../../assets/atp/habitat-for-humanity-logo.png', alt: 'avatar' }],
            name: 'Habbit for Humanity',
            desc: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretium.Integer tincidunt.Cras dapibus.Vivamus elementum semper nisi.Aenean vulputate eleifend tellus.Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.Phasellus viverra nulla ut metus varius laoreet.Quisque rutrum.Aenean imperdiet.',
            time: '2.5 Hr',
            images: [

            ],
            rating: 3,
            likes: 2
        },
        {
            id: 10004,
            avatar: [{ src: '../../../assets/atp/wwf-logo.png', alt: 'avatar' }],
            name: 'WWF12',
            desc: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretium.Integer tincidunt.Cras dapibus.Vivamus elementum semper nisi.Aenean vulputate eleifend tellus.Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.Phasellus viverra nulla ut metus varius laoreet.Quisque rutrum.Aenean imperdiet.',
            time: '45 m',
            images: [
                {
                    src: '../../../assets/atp/wwf.jpg', alt: 'wwf women'
                }
            ],
            rating: 5,
            likes: 12
        },
        {
            id: 10003,
            avatar: [{ src: '../../../assets/atp/habitat-for-humanity-logo.png', alt: 'avatar' }],
            name: 'Habbit for Humanity',
            desc: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretium.Integer tincidunt.Cras dapibus.Vivamus elementum semper nisi.Aenean vulputate eleifend tellus.Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.Phasellus viverra nulla ut metus varius laoreet.Quisque rutrum.Aenean imperdiet.',
            time: '30 m',
            images: [
                {
                    src: '../../../assets/atp/presbyterian-women.jpg', alt: 'presbyterian women'
                },
                {
                    src: '../../../assets/atp/presbyterian-women2.jpg', alt: 'presbyterian 2 women'
                }
            ],
            rating: 2,
            likes: 10
        },
        {
            id: 10002,
            avatar: [{ src: '../../../assets/atp/habitat-for-humanity-logo.png', alt: 'avatar' }],
            name: 'Habbit for Humanity',
            desc: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretium.Integer tincidunt.Cras dapibus.Vivamus elementum semper nisi.Aenean vulputate eleifend tellus.Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.Phasellus viverra nulla ut metus varius laoreet.Quisque rutrum.Aenean imperdiet.',
            time: '2.5 Hr',
            images: [

            ],
            rating: 3,
            likes: 2
        },
        {
            id: 10001,
            avatar: [{ src: '../../../assets/atp/wwf-logo.png', alt: 'avatar' }],
            name: 'WWF12',
            desc: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretium.Integer tincidunt.Cras dapibus.Vivamus elementum semper nisi.Aenean vulputate eleifend tellus.Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.Phasellus viverra nulla ut metus varius laoreet.Quisque rutrum.Aenean imperdiet.',
            time: '45 m',
            images: [
                {
                    src: '../../../assets/atp/wwf.jpg', alt: 'wwf women'
                }
            ],
            rating: 5,
            likes: 12
        }
    ];

    constructor() { }

    ngOnInit() {
    }
    remove(row: ArticleModel) {
        const rowIndex = this.articles.findIndex(e => e.id == row.id);
        this.articles.splice(rowIndex, 1);
    }
}
