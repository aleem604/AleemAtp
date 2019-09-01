import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'atp-organizations',
    templateUrl: './atp-organizations.component.html',
    styleUrls: ['./atp-organizations.component.scss']
  
})
export class AtpOrganizationsComponent implements OnInit {
  max: number = 5;
  rate: number = 4;
  isReadonly: boolean = true;
  isCollapsed = true;
  tab = 'videos';
  state: any = {
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


  news = [
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
      avatar: [{ src: '../../../assets/atp/presbyterian-women-logo.png', alt: 'avatar' }],
      name: 'John Doe',
      desc: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretium.Integer tincidunt.Cras dapibus.Vivamus elementum semper nisi.Aenean vulputate eleifend tellus.Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.Phasellus viverra nulla ut metus varius laoreet.Quisque rutrum.Aenean imperdiet.',
      time: '30 m',
      images: [
        {
          src: '../../../assets/atp/presbyterian-women.jpg', alt: 'presbyterian women'
        }
      ],
      rating: 3,
      likes: 10
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
      rating: 1,
      likes: 2
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
      rating: 4,
      likes: 4
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
      rating: 4,
      likes: 4
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
      rating: 4,
      likes: 4
    },
  ];
  constructor(private router: ActivatedRoute ) { }

    ngOnInit() {
        
  }
}
