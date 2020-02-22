import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'atp-organizations',
    templateUrl: './atp-organizations.component.html',
    styleUrls: ['./atp-organizations.component.scss'],
    changeDetection: ChangeDetectionStrategy.Default

})
export class AtpOrganizationsComponent implements OnInit {
    organizationId: number;
    max: number = 5;
    rate: number = 4;
    isReadonly: boolean = true;
    isCollapsed = true;
    tab = 'videos';
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

    constructor(private route: ActivatedRoute,private router: Router, private cdr: ChangeDetectorRef) {
        this.route.firstChild.paramMap.subscribe((p) => {
            this.organizationId = +p.get('id');
        });

        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
    }

    ngOnInit() {

    }
    detectChanges() {
        try {
            this.cdr.detectChanges();
        } catch (e) {

        }
    }
}
