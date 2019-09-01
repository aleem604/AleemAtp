import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'politician-vote-history',
    templateUrl: './politician-vote-history.component.html',
    styleUrls: ['./politician-vote-history.component.scss']
})
export class PoliticianVoteHistoryComponent implements OnInit {
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
