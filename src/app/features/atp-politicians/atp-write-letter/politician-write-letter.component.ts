import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
    selector: 'politician-write-letter',
    templateUrl: './politician-write-letter.component.html',
    styleUrls: ['./politician-write-letter.component.scss'],
})
export class PoliticianWriteLetterComponent implements OnInit {
    modalRef: BsModalRef;

    letters = {
        "federal":
            [
                { id: 1, name: 'Kamala Harris', addr: 'House of Representatives', district: '12th Distict' },
                { id: 2, name: 'Derek Wils', addr: 'Challenger', district: '' },
                { id: 3, name: 'Sarah Dept', addr: 'Challenger', district: '' },
                { id: 4, name: 'Kamala Harris', addr: 'House of Representatives', district: '12th Distict' },
                { id: 5, name: 'Derek Wils', addr: 'Challenger', district: '' },
                { id: 6, name: 'Sarah Dept', addr: 'Challenger', district: '' },
                { id: 7, name: 'Kamala Harris', addr: 'House of Representatives', district: '12th Distict' },
                { id: 8, name: 'Derek Wils', addr: 'Challenger', district: '' },
                { id: 9, name: 'Sarah Dept', addr: 'Challenger', district: '' },
                { id: 10, name: 'Kamala Harris', addr: 'House of Representatives', district: '12th Distict' },
                { id: 11, name: 'Derek Wils', addr: 'Challenger', district: '' },
                { id: 12, name: 'Sarah Dept', addr: 'Challenger', district: '' },
            ],
        "state": [
            { id: 1, name: 'Jassica Peter', addr: 'Senator', district: '57th District' },
            { id: 2, name: 'Dache Overton', addr: 'Challenger', district: '' },
            { id: 3, name: 'Daniel Maiden', addr: 'Challenger', district: '' },
            { id: 4, name: 'Christopher Brahan', addr: 'Challenger', district: '' },
            { id: 5, name: 'Jassica Peter', addr: 'Senator', district: '57th District' },
            { id: 6, name: 'Dache Overton', addr: 'Challenger', district: '' },
            { id: 7, name: 'Daniel Maiden', addr: 'Challenger', district: '' },
            { id: 8, name: 'Christopher Brahan', addr: 'Challenger', district: '' },
            { id: 9, name: 'Jassica Peter', addr: 'Senator', district: '57th District' },
            { id: 10, name: 'Dache Overton', addr: 'Challenger', district: '' },
            { id: 11, name: 'Daniel Maiden', addr: 'Challenger', district: '' },
            { id: 12, name: 'Christopher Brahan', addr: 'Challenger', district: '' },
            { id: 13, name: 'Jassica Peter', addr: 'Senator', district: '57th District' },
            { id: 14, name: 'Dache Overton', addr: 'Challenger', district: '' },
            { id: 15, name: 'Daniel Maiden', addr: 'Challenger', district: '' },
            { id: 16, name: 'Christopher Brahan', addr: 'Challenger', district: '' },

        ],
        "local": [
            { id: 1, name: 'Jacob Wray', addr: 'Challenger', district: '' },
            { id: 2, name: 'Ryan Wilson', addr: 'Challenger', district: '' },
            { id: 3, name: 'Tony West', addr: 'Challenger', district: '' },
            { id: 4, name: 'Zachary English', addr: 'Challenger', district: '' },
            { id: 5, name: 'Jacob Wray', addr: 'Challenger', district: '' },
            { id: 6, name: 'Ryan Wilson', addr: 'Challenger', district: '' },
            { id: 7, name: 'Tony West', addr: 'Challenger', district: '' },
            { id: 8, name: 'Zachary English', addr: 'Challenger', district: '' },
            { id: 9, name: 'Jacob Wray', addr: 'Challenger', district: '' },
            { id: 11, name: 'Ryan Wilson', addr: 'Challenger', district: '' },
            { id: 12, name: 'Tony West', addr: 'Challenger', district: '' },
            { id: 13, name: 'Zachary English', addr: 'Challenger', district: '' },
            { id: 14, name: 'Jacob Wray', addr: 'Challenger', district: '' },
            { id: 15, name: 'Ryan Wilson', addr: 'Challenger', district: '' },
            { id: 16, name: 'Tony West', addr: 'Challenger', district: '' },
            { id: 17, name: 'Zachary English', addr: 'Challenger', district: '' },
            { id: 18, name: 'Jacob Wray', addr: 'Challenger', district: '' },
            { id: 19, name: 'Ryan Wilson', addr: 'Challenger', district: '' },
            { id: 20, name: 'Tony West', addr: 'Challenger', district: '' },
            { id: 21, name: 'Zachary English', addr: 'Challenger', district: '' },
        ]
    };
    public state: any = {
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




    showMessage(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template, { class: 'modal-sm modal-dialog-centered change-address', ignoreBackdropClick: false, keyboard: false });
        return this.modalRef;
    }

    constructor(private modalService: BsModalService) { }
    ngOnInit() {
    }

}
