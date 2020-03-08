import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'politician-write-letter-edit',
    templateUrl: './politician-write-letter-edit.component.html',
    styleUrls: ['./politician-write-letter-edit.component.scss'],
})
export class PoliticianWriteLetterEditComponent implements OnInit {
  letters = {
    "federal":
      [
        { id: 1, name: 'Kamala Harris', addr: 'House of Representatives', district:'12th Distict'},
        { id: 2, name: 'Derek Wils', addr: 'Challenger', district:''},
        { id: 3, name: 'Sarah Dept', addr: 'Challenger', district: '' },
        { id: 4, name: 'Jessica Drew', addr: 'Challenger', district: '' },
      ],
    "state": [
      { id: 5, name: 'Jassica Peter', addr: 'Senator', district: '57th District' },
      { id: 6, name: 'Dache Overton', addr: 'Challenger', district: '' },
      { id: 7, name: 'Daniel Maiden', addr: 'Challenger', district: '' },
      { id: 8, name: 'Christopher Brahan', addr: 'Challenger', district: '' },
    ],
    "local": [
      { id: 9, name: 'Jacob Wray', addr: 'Challenger', district: '' },
      { id: 10, name: 'Ryan Wilson', addr: 'Challenger', district: '' },
      { id: 11, name: 'Tony West', addr: 'Challenger', district: '' },
      { id: 12, name: 'Zachary English', addr: 'Challenger', district: '' },
     
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


  constructor() {}

  ngOnInit() {
  }

}
