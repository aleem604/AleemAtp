import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';
import { ModalDirective, BsModalService, BsModalRef } from 'ngx-bootstrap';


@Component({
    selector: 'profile-videos',
  templateUrl: './profile-videos.component.html',
  styleUrls: ['./profile-videos.component.scss'],
  providers: []
})
export class ProfileVideosComponent implements OnInit {
  //@ViewChild('lgModal', { static: true }) public modalRef: ModalDirective;
  public modalRef: BsModalRef;
  videos = [
    {
      name: 'Space X',
      title: 'World\'s First Class Orbital',
      date: '23 september',
      url:'../../../assets/atp/videos/space shuttle launch 1.jpg'
    },
    {
      name: 'NASA',
      title: 'Georgia Students to Speak with NASA Austronaut',
      date: '23 september',
      url: '../../../assets/atp/videos/space shuttle launch 3.jpg'
    },
    {
      name: 'Space X',
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      date: '23 september',
      url: '../../../assets/atp/videos/space shuttle launch 4.jpg'
    },
    {
      name: 'Space X',
      title: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable',
      date: '23 september',
      url: '../../../assets/atp/videos/space shuttle launch 5.jpg'
    },
    {
      name: 'Space X',
      title: 'World\'s First Class Orbital',
      date: '23 september',
      url: '../../../assets/atp/videos/space shuttle launch 1.jpg'
    },
    {
      name: 'Space X',
      title: 'World\'s First Class Orbital',
      date: '23 september',
      url: '../../../assets/atp/videos/space shuttle launch 1.jpg'
    },
    {
      name: 'Space X',
      title: 'World\'s First Class Orbital',
      date: '23 september',
      url: '../../../assets/atp/videos/space shuttle launch 1.jpg'
    }
  ];

  config = {
    class: 'modal-dialog-centered'
  }

  constructor(private modalService: BsModalService) {}

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
