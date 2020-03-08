import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Event } from '@angular/router';

@Component({
    selector: 'politician-write-me',
    templateUrl: './politician-write-me.component.html',
    styleUrls: ['./politician-write-me.component.scss']
})
export class PoliticianWriteMeComponent implements OnInit {
    bsModalRef: BsModalRef;
    debate: boolean = false;

    constructor(private modalService: BsModalService) { }
    ngOnInit() {
    }

    showDebateDiag(event: Event, template: TemplateRef<any>) {
        if (!this.debate) {
            this.bsModalRef = this.modalService.show(template, { class: 'modal-md modal-dialog-centered', ignoreBackdropClick: false, keyboard: false });
        } else {
            this.bsModalRef.hide();
        }
        
    }

    hideDiag() {
        this.bsModalRef.hide();
    }

    
}
