import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'

@Component({
    selector: 'sa-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
    year: string;
    constructor() { }

    ngOnInit() {
        this.year = moment().format('YYYY');
    }

}
