import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Select2OptionData } from 'ng-select2';

@Component({
    selector: 'atp-archives',
    templateUrl: './atp-archives.component.html',
    queries: {
        "tabsContentRef": new ViewChild("tabsContentRef", { static: true })
    },
    styleUrls: ['./atp-archives.component.scss'],
})
export class AtpArchivesComponent implements OnInit, AfterViewInit {
    public tabsContentRef!: ElementRef;
    exampleData: Array<Select2OptionData>;
    topics: { id: string, text: '' };
    options = {
        multiple: false,
        minimumResultsForSearch: -1,
        theme: 'classic'
    };
    activeTab = 'articles';
    state: any = {
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

    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.exampleData = [
            {
                id: '',
                disabled: true,
                text: 'Topics'
            },
            {
                id: '1',
                text: 'Topic 1'
            },
            {
                id: '2',
                text: 'Topic 2'
            },
            {
                id: '3',
                text: 'Topic 3'
            }
        ];
    }

    ngAfterViewInit(): void {
       
    }

    toggleVisibility(tab: string): void {
        this.activeTab = tab;     
    }


   
}
