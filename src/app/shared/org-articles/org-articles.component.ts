import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'org-articles',
    templateUrl: './org-articles.component.html',
    styleUrls: ['./org-articles.component.scss'],
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
export class OrgArticlesComponent implements OnInit {
  articles = [
    {
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

}
