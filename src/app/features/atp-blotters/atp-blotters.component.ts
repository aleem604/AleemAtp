import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'atp-blotters',
    templateUrl: './atp-blotters.component.html',
    styleUrls: ['./atp-blotters.component.scss'],
})
export class AtpBlottersComponent implements OnInit {
    blotters = [
        { id: 1, name: 'Jacob Wray', addr: 'Belleville News Democrat', crime: 'Animal Abuse' },
        { id: 2, name: 'Ryan Wilson', addr: 'St. Louis Dispatch', crime: 'Prostitution' },
        { id: 3, name: 'Tony West', addr: 'Belleville News Democrat', crime: 'Marjuana' },
        { id: 4, name: 'Zachary English', addr: 'St. Louis Dispatch', crime: 'Child Abuse' },
        { id: 5, name: 'Terence Robinson', addr: 'St. Louis Dispatch', crime: 'Assault' },
        { id: 6, name: 'Dache Overton', addr: 'Belleville News Democrat', crime: 'Cyber bullying' },
        { id: 7, name: 'Daniel Maiden', addr: 'Belleville News Democrat', crime: 'Illegal Immigration' },
        { id: 8, name: 'Christopher Brahan', addr: 'St. Louis Dispatch', crime: 'Drunk Driving' },

        { id: 1, name: 'Jacob Wray', addr: 'Belleville News Democrat', crime: 'Animal Abuse' },
        { id: 2, name: 'Ryan Wilson', addr: 'St. Louis Dispatch', crime: 'Prostitution' },
        { id: 3, name: 'Tony West', addr: 'Belleville News Democrat', crime: 'Marjuana' },
        { id: 4, name: 'Zachary English', addr: 'St. Louis Dispatch', crime: 'Child Abuse' },
        { id: 5, name: 'Terence Robinson', addr: 'St. Louis Dispatch', crime: 'Assault' },
        { id: 6, name: 'Dache Overton', addr: 'Belleville News Democrat', crime: 'Cyber bullying' },
        { id: 7, name: 'Daniel Maiden', addr: 'Belleville News Democrat', crime: 'Illegal Immigration' },
        { id: 8, name: 'Christopher Brahan', addr: 'St. Louis Dispatch', crime: 'Drunk Driving' },

        { id: 1, name: 'Jacob Wray', addr: 'Belleville News Democrat', crime: 'Animal Abuse' },
        { id: 2, name: 'Ryan Wilson', addr: 'St. Louis Dispatch', crime: 'Prostitution' },
        { id: 3, name: 'Tony West', addr: 'Belleville News Democrat', crime: 'Marjuana' },
        { id: 4, name: 'Zachary English', addr: 'St. Louis Dispatch', crime: 'Child Abuse' },
        { id: 5, name: 'Terence Robinson', addr: 'St. Louis Dispatch', crime: 'Assault' },
        { id: 6, name: 'Dache Overton', addr: 'Belleville News Democrat', crime: 'Cyber bullying' },
        { id: 7, name: 'Daniel Maiden', addr: 'Belleville News Democrat', crime: 'Illegal Immigration' },
        { id: 8, name: 'Christopher Brahan', addr: 'St. Louis Dispatch', crime: 'Drunk Driving' },
    ];
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
