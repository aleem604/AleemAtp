import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'profile-organizations',
  templateUrl: './profile-organizations.component.html',
  styleUrls: ['./profile-organizations.component.scss']
})
export class ProfileOrganizationsComponent implements OnInit {
  organizations = [
    {
      avatar: [{ src: '../../../assets/atp/presbyterian-women-logo.png', alt: 'avatar' }],
      name: 'Habbit for Humanity',
    },
    {
      avatar: [{ src: '../../../assets/atp/presbyterian-women-logo.png', alt: 'avatar' }],
      name: 'Habbit for Humanity',
    },
    {
      avatar: [{ src: '../../../assets/atp/wwf-logo.png', alt: 'avatar' }],
      name: 'WWF12',
    },
    {
      avatar: [{ src: '../../../assets/atp/presbyterian-women-logo.png', alt: 'avatar' }],
      name: 'Habbit for Humanity',
    },
    {
      avatar: [{ src: '../../../assets/atp/presbyterian-women-logo.png', alt: 'avatar' }],
      name: 'Habbit for Humanity',
    },
    {
      avatar: [{ src: '../../../assets/atp/change-logo.png', alt: 'avatar' }],
      name: 'WWF12',
    },
    {
      avatar: [{ src: '../../../assets/atp/change-logo.png', alt: 'avatar' }],
      name: 'Habbit for Humanity',
    },
    {
      avatar: [{ src: '../../../assets/atp/change-logo.png', alt: 'avatar' }],
      name: 'Habbit for Humanity',
    },
    {
      avatar: [{ src: '../../../assets/atp/change-logo.png', alt: 'avatar' }],
      name: 'WWF12',
    },
    {
      avatar: [{ src: '../../../assets/atp/change-logo.png', alt: 'avatar' }],
      name: 'Habbit for Humanity',
    },
    {
      avatar: [{ src: '../../../assets/atp/change-logo.png', alt: 'avatar' }],
      name: 'Habbit for Humanity',
    },
    {
      avatar: [{ src: '../../../assets/atp/change-logo.png', alt: 'avatar' }],
      name: 'WWF12',
    },
    {
      avatar: [{ src: '../../../assets/atp/change-logo.png', alt: 'avatar' }],
      name: 'Habbit for Humanity',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
