import { Component, OnInit, ViewEncapsulation, Renderer2, OnDestroy, HostListener } from '@angular/core';
import { document } from 'ngx-bootstrap';

@Component({
	selector: 'atp-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.scss'],
	encapsulation: ViewEncapsulation.Emulated
})
export class AtpUserComponent implements OnInit, OnDestroy {

    prefix = 'is-';
    sizes = [
        {
            id: SCREEN_SIZE.XS, name: 'xs', css: `d-block d-sm-none`
        },
        {
            id: SCREEN_SIZE.SM, name: 'sm', css: `d-none d-sm-block d-md-none`
        },
        {
            id: SCREEN_SIZE.MD, name: 'md', css: `d-none d-md-block d-lg-none`
        },
        {
            id: SCREEN_SIZE.LG, name: 'lg', css: `d-none d-lg-block d-xl-none`
        },
        {
            id: SCREEN_SIZE.XL, name: 'xl', css: `d-none d-xl-block`
        },
    ];

	constructor(private renderer: Renderer2) {

    }
    @HostListener("window:resize", [])
    private onResize() {
        this.detectScreenSize();
    }

	ngOnInit(): void {
        this.renderer.setStyle(document.body, 'background', '#012778');
        this.renderer.removeClass(document.body, 'smart-style-7');
        this.renderer.removeClass(document.body, 'desktop-detected');
	}
	ngOnDestroy(): void {
        document.body.removeAttribute('style');
        this.renderer.addClass(document.body, 'smart-style-7');
        this.renderer.addClass(document.body, 'desktop-detected');
    }

    private detectScreenSize() {
        this.renderer.removeAttribute(document.body, 'class');
    }
}

export enum SCREEN_SIZE {
    XS,
    SM,
    MD,
    LG,
    XL
}