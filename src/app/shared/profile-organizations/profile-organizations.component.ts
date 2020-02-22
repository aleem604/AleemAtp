import { Component, OnInit, Input } from '@angular/core';
import { OrganizationModel } from '../../core';

@Component({
    selector: 'profile-organizations',
    templateUrl: './profile-organizations.component.html',
    styleUrls: ['./profile-organizations.component.scss']
})
export class ProfileOrganizationsComponent implements OnInit {
    organizations: Array<OrganizationModel> = [
        {
            id: 1001,
            avatar: [{ src: '../../../assets/atp/presbyterian-women-logo.png', alt: 'avatar' }],
            name: 'Habbit for Humanity',
            following: true
        },
        {
            id: 1002,
            avatar: [{ src: '../../../assets/atp/presbyterian-women-logo.png', alt: 'avatar' }],
            name: 'Habbit for Humanity',
            following: true
        },
        {
            id: 1003,
            avatar: [{ src: '../../../assets/atp/wwf-logo.png', alt: 'avatar' }],
            name: 'WWF12',
            following: false
        },
        {
            id: 1004,
            avatar: [{ src: '../../../assets/atp/presbyterian-women-logo.png', alt: 'avatar' }],
            name: 'Habbit for Humanity',
            following: true
        },
        {
            id: 1005,
            avatar: [{ src: '../../../assets/atp/presbyterian-women-logo.png', alt: 'avatar' }],
            name: 'Habbit for Humanity',
            following: false
        },
        {
            id: 1006,
            avatar: [{ src: '../../../assets/atp/change-logo.png', alt: 'avatar' }],
            name: 'WWF12',
            following: true
        },
        {
            id: 1007,
            avatar: [{ src: '../../../assets/atp/change-logo.png', alt: 'avatar' }],
            name: 'Habbit for Humanity',
            following: false
        },
        {
            id: 1008,
            avatar: [{ src: '../../../assets/atp/change-logo.png', alt: 'avatar' }],
            name: 'Habbit for Humanity',
            following: false
        },
        {
            id: 1009,
            avatar: [{ src: '../../../assets/atp/change-logo.png', alt: 'avatar' }],
            name: 'WWF12',
            following: true
        },
        {
            id: 1010,
            avatar: [{ src: '../../../assets/atp/change-logo.png', alt: 'avatar' }],
            name: 'Habbit for Humanity',
            following: false
        },
        {
            id: 1011,
            avatar: [{ src: '../../../assets/atp/change-logo.png', alt: 'avatar' }],
            name: 'Habbit for Humanity',
            following: true
        },
        {
            id: 1012,
            avatar: [{ src: '../../../assets/atp/change-logo.png', alt: 'avatar' }],
            name: 'WWF12',
            following: false
        },
        {
            id: 1013,
            avatar: [{ src: '../../../assets/atp/change-logo.png', alt: 'avatar' }],
            name: 'Habbit for Humanity',
            following: true
        }
    ];

    constructor() { }

    ngOnInit() {
    }

    switchFollowing(row: OrganizationModel) {
        row.following = !row.following;
    }
}
