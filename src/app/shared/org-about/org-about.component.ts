import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'org-about',
    templateUrl: './org-about.component.html',
    styleUrls: ['./org-about.component.scss'],
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
export class OrgAboutComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

}
