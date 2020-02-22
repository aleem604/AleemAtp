import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';
import { ModalDirective, BsModalService, BsModalRef } from 'ngx-bootstrap';


@Component({
    selector: 'archived-videos',
    templateUrl: './archived-videos.component.html',
    styleUrls: ['./archived-videos.component.scss'],
    providers: []
})
export class ArchivedVideosComponent implements OnInit {
    //@ViewChild('lgModal', { static: true }) public modalRef: ModalDirective;
    public modalRef: BsModalRef;
    videos = [
        {
            name: 'Space X',
            title: 'Name of Video',
            date: '23 september',
            url: '../../../assets/atp/videos/space shuttle launch 1.jpg'
        },
        {
            name: 'NASA',
            title: 'Name of Video',
            date: '23 september',
            url: '../../../assets/atp/videos/space shuttle launch 3.jpg'
        },
        {
            name: 'Space X',
            title: 'Name of Video',
            date: '23 september',
            url: '../../../assets/atp/videos/space shuttle launch 4.jpg'
        },
        {
            name: 'Space X',
            title: 'Name of Video',
            date: '23 september',
            url: '../../../assets/atp/videos/space shuttle launch 5.jpg'
        },
        {
            name: 'Space X',
            title: 'Name of Video',
            date: '23 september',
            url: '../../../assets/atp/videos/space shuttle launch 1.jpg'
        },
        {
            name: 'Space X',
            title: 'Name of Video',
            date: '23 september',
            url: '../../../assets/atp/videos/space shuttle launch 1.jpg'
        },
        {
            name: 'Space X',
            title: 'Name of Video',
            date: '23 september',
            url: '../../../assets/atp/videos/space shuttle launch 1.jpg'
        },
        {
            name: 'Space X',
            title: 'Name of Video',
            date: '23 september',
            url: '../../../assets/atp/videos/space shuttle launch 5.jpg'
        },
        {
            name: 'Space X',
            title: 'Name of Video',
            date: '23 september',
            url: '../../../assets/atp/videos/space shuttle launch 1.jpg'
        },
        {
            name: 'Space X',
            title: 'Name of Video',
            date: '23 september',
            url: '../../../assets/atp/videos/space shuttle launch 1.jpg'
        },
        {
            name: 'Space X',
            title: 'Name of Video',
            date: '23 september',
            url: '../../../assets/atp/videos/space shuttle launch 1.jpg'
        }
    ];

    config = {
        class: 'modal-dialog-centered'
    }

    constructor(private modalService: BsModalService) { }

    ngOnInit() {
    }


    //public showChildModal(): void {
    //  //this.lgModal.show();
    //  this.modalRef = this.modalService.show(template, this.config);

    //}

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(
            template,
            Object.assign({}, { class: 'gray modal-md video-modal-dialog-centered' })
        );
    }

    public hideModal(): void {
        this.modalRef.hide();
    }

}
