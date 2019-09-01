import { Component, OnInit, Input } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
    selector: 'politician-responses',
    templateUrl: './politician-responses.component.html',
    styleUrls: ['./politician-responses.component.scss'],
    styles: [
        `
      :host >>> table  tr  td .tooltip-inner {
        border-radius: 25px;
        background-color: #fff;
        border: solid 1px rgba(0, 38, 255, 0.2);
        color: #888;
      }
      :host >>> table  tr  td .tooltip.top .tooltip-arrow:before,
      :host >>> table  tr  td .tooltip.top .tooltip-arrow {
        border-top-color: rgba(0, 38, 255, 0.2);
      }

      :host >>> table  tr  td .tooltip-bottom .tooltip-arrow:before,
      :host >>> table  tr  td .tooltip .tooltip-arrow {
        border-bottom-color: rgba(0, 38, 255, 0.2);
      }
    `
    ]
})
export class PoliticianResponsesComponent implements OnInit {
    letters = [
        { id: 1, name: 'Kamala Harris', addr: 'Name of Topic', rating: 3 },
        { id: 2, name: 'Derek Wils', addr: 'Name of Topic', rating: 4 },
        { id: 3, name: 'Sarah Dept', addr: 'Name of Topic', rating: 5 },
        { id: 4, name: 'Jessica Drew', addr: 'Name of Topic', rating: 3 },

        { id: 5, name: 'Jassica Peter', addr: 'Name of Topic', rating: 3 },
        { id: 6, name: 'Dache Overton', addr: 'Name of Topic', rating: 2 },
        { id: 7, name: 'Daniel Maiden', addr: 'Name of Topic', rating: 1 },
        { id: 8, name: 'Christopher Brahan', addr: 'Name of Topic', rating: 3 },

        { id: 9, name: 'Jacob Wray', addr: 'Name of Topic', rating: 4 },
        { id: 10, name: 'Ryan Wilson', addr: 'Name of Topic', rating: 2 },
        { id: 11, name: 'Tony West', addr: 'Name of Topic', rating:3 },
        { id: 12, name: 'Zachary English', addr: 'Name of Topic', rating: 1 },
        { id: 9, name: 'Jacob Wray', addr: 'Name of Topic', rating: 4 },
        { id: 10, name: 'Ryan Wilson', addr: 'Name of Topic', rating: 2 },
        { id: 11, name: 'Tony West', addr: 'Name of Topic', rating: 3 },
        { id: 12, name: 'Zachary English', addr: 'Name of Topic', rating: 1 },
        { id: 9, name: 'Jacob Wray', addr: 'Name of Topic', rating: 4 },
        { id: 10, name: 'Ryan Wilson', addr: 'Name of Topic', rating: 2 },
        { id: 11, name: 'Tony West', addr: 'Name of Topic', rating: 3 },
        { id: 12, name: 'Zachary English', addr: 'Name of Topic', rating: 1 },
    ];
    constructor(private router : Router) { }

    ngOnInit() {
    }

    redirect(id): void {
        this.router.navigate(['/politicians/responses',id]);
    }
}
