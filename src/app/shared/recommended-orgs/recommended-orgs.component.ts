import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'recommended-orgs',
  templateUrl: './recommended-orgs.component.html',
  styleUrls: ['./recommended-orgs.component.scss']
})
export class RecommendedOrgsComponent implements OnInit {
  orgs = [
    {
      image_url: '../../../assets/atp/org1-logo.png',
      title: 'First Organizatoin',
    },
    {
      image_url: '../../../assets/atp/org2-logo.png',
      title: 'Second Organization',
    },
    {
      image_url: '../../../assets/atp/org3-logo.png',
      title: 'Third Oragnization',
    }
  ];

  events = [
    {
      day: 10,
      month: 'September 2:30 PM',
      address: 'San Francisco, CA',
      title: 'WWC Donation Lunch',
      desc:'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.'
    },
    {
      day: 9,
      month: 'September 2:30 PM',
      address: 'San Francisco, CA',
      title: 'WWC Donation Lunch',
      desc: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.'
    },
    {
      day: 8,
      month: 'September 2:30 PM',
      address: 'San Francisco, CA',
      title: 'WWC Donation Lunch',
      desc: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.'
    }
  ];


  constructor() { }

  ngOnInit() {

  }

}
