import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'organizations-organizations',
    templateUrl: './organizations-organizations.component.html',
    styleUrls: ['./organizations-organizations.component.scss']
})
export class OrganizationsOrganizationsComponent implements OnInit {
    organizations = [
        {
            avatar: [{ src: '../../../assets/atp/presbyterian-women-logo.png', alt: 'avatar' }],
            name: 'Habbit for Humanity',
            following: true
        },
        {
            avatar: [{ src: '../../../assets/atp/presbyterian-women-logo.png', alt: 'avatar' }],
            name: 'Habbit for Humanity',
            following: true
        },
        {
            avatar: [{ src: '../../../assets/atp/wwf-logo.png', alt: 'avatar' }],
            name: 'WWF12',
            following: false
        },
        {
            avatar: [{ src: '../../../assets/atp/presbyterian-women-logo.png', alt: 'avatar' }],
            name: 'Habbit for Humanity',
            following: true
        },
        {
            avatar: [{ src: '../../../assets/atp/presbyterian-women-logo.png', alt: 'avatar' }],
            name: 'Habbit for Humanity',
            following: false
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
