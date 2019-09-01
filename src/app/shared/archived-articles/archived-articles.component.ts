import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'archived-articles',
  templateUrl: './archived-articles.component.html',
  styleUrls: ['./archived-articles.component.scss']
})
export class ArchivedArticlesComponent implements OnInit {
  archives = [
    {
      date: 'September 2016',
      count: '124',
      hidden: true,
      detail: [
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
      ]
    },
    {
      date: 'August 2016',
      count: '258',
      hidden: true,
      detail: [
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
      ]
    },
    {
      date: 'July 2016',
      count: '513',
      hidden: true,
      detail: [
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
      ]
    },
    {
      date: 'June 2016',
      count: '231',
      hidden: true,
      detail: [
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
      ]
    },
    {
      date: 'May 2016',
      count: '112',
      hidden: true,
      detail: [
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
      ]
    },
    {
      date: 'April 2016',
      count: '200',
      hidden: true,
      detail: [
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
      ]
    },
    {
      date: 'September 2016',
      count: '124',
      hidden: true,
      detail: [
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
      ]
    },
    {
      date: 'September 2016',
      count: '124',
      hidden: true,
      detail: [
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
      ]
    },
    {
      date: 'September 2016',
      count: '124',
      hidden: true,
      detail: [
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
      ]
    },
    {
      date: 'September 2016',
      count: '124',
      hidden: true,
      detail: [
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
      ]
    },
    {
      date: 'September 2016',
      count: '124',
      hidden: true,
      detail: [
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
      ]
    },
    {
      date: 'September 2016',
      count: '124',
      hidden: true,
      detail: [
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
      ]
    },
    {
      date: 'September 2016',
      count: '124',
      hidden: true,
      detail: [
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
      ]
    },
    {
      date: 'September 2016',
      count: '124',
      hidden: true,
      detail: [
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
      ]
    },
    {
      date: 'September 2016',
      count: '124',
      hidden: true,
      detail: [
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
      ]
    },
    {
      date: 'September 2016',
      count: '124',
      hidden: true,
      detail: [
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
      ]
    },
    {
      date: 'September 2016',
      count: '124',
      hidden: true,
      detail: [
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
      ]
    },
    {
      date: 'September 2016',
      count: '124',
      hidden: true,
      detail: [
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
      ]
    }
  ];

  constructor() {}

  ngOnInit() {
  }

}
