import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'org-stance',
    templateUrl: './org-stance.component.html',
    styleUrls: ['./org-stance.component.scss'],
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
export class OrgStanceComponent implements OnInit {
    letters = [
        { id: 1, name: 'Kamala Harris', addr: 'Illinois'},
        { id: 2, name: 'Derek Wils', addr: 'Missouri'},
        { id: 3, name: 'Sarah Dept', addr: 'Hawaii'},
        { id: 4, name: 'Jessica Drew', addr: 'Illinois'},

        { id: 5, name: 'Jassica Peter', addr: 'Missouri'},
        { id: 6, name: 'Dache Overton', addr: 'Illinois'},
        { id: 7, name: 'Daniel Maiden', addr: 'Challenger'},
        { id: 8, name: 'Christopher Brahan', addr: 'Hawaii'},

        { id: 9, name: 'Jacob Wray', addr: 'Illinois'},
        { id: 10, name: 'Ryan Wilson', addr: 'Missouri'},
        { id: 11, name: 'Tony West', addr: 'Hawaii'},
        { id: 12, name: 'Zachary English', addr: 'Missouri' },

        { id: 13, name: 'Kamala Harris', addr: 'Illinois' },
        { id: 14, name: 'Derek Wils', addr: 'Missouri' },
        { id: 15, name: 'Sarah Dept', addr: 'Hawaii' },
        { id: 16, name: 'Jessica Drew', addr: 'Illinois' },

        { id: 17, name: 'Jassica Peter', addr: 'Missouri' },
        { id: 18, name: 'Dache Overton', addr: 'Illinois' },
        { id: 19, name: 'Daniel Maiden', addr: 'Challenger' },
        { id: 20, name: 'Christopher Brahan', addr: 'Hawaii' },

        { id: 21, name: 'Jacob Wray', addr: 'Illinois' },
        { id: 22, name: 'Ryan Wilson', addr: 'Missouri' },
        { id: 23, name: 'Tony West', addr: 'Hawaii' },
        { id: 24, name: 'Zachary English', addr: 'Missouri' },
    ];
    constructor() { }

    ngOnInit() {
    }

}
