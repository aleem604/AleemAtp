import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'atp-vote',
    templateUrl: './atp-vote.component.html',
    styleUrls: ['./atp-vote.component.scss'],
})
export class AtpVoteComponent implements OnInit {
    modalRef: BsModalRef;
    blotters = [
        { id: 1, name: 'Lorem Ipsum is simply dummy text added', addr: 'San Francisco, CA', image: '../../../assets/atp/vote/pet1.jpg' },
        { id: 2, name: 'Lorem Ipsum is simply dummy text added', addr: 'London, UK', image: '../../../assets/atp/vote/pet2.jpg' },
        { id: 3, name: 'Lorem Ipsum is simply dummy text added', addr: 'Berlin, Germany', crime: 'Marjuana' },
        { id: 4, name: 'Lorem Ipsum is simply dummy text added', addr: 'Sydney, Australia', crime: 'Child Abuse' },
        { id: 5, name: 'Lorem Ipsum is simply dummy text added', addr: 'Room, Italy', crime: 'Assault' },
        { id: 6, name: 'Lorem Ipsum is simply dummy text added', addr: 'San Francisco, CA', crime: 'Cyber bullying' },
        { id: 7, name: 'Lorem Ipsum is simply dummy text added', addr: 'San Francisco, CA', crime: 'Illegal Immigration' },
        { id: 8, name: 'Lorem Ipsum is simply dummy text added', addr: 'San Francisco, CA', crime: 'Drunk Driving' },

        { id: 10, name: 'Lorem Ipsum is simply dummy text added', addr: 'San Francisco, CA', crime: 'Animal Abuse' },
        { id: 11, name: 'Lorem Ipsum is simply dummy text added', addr: 'San Francisco, CA', crime: 'Prostitution' },
        { id: 12, name: 'Lorem Ipsum is simply dummy text added', addr: 'San Francisco, CA', crime: 'Marjuana' },
        { id: 13, name: 'Lorem Ipsum is simply dummy text added', addr: 'San Francisco, CA', crime: 'Child Abuse' },
        { id: 14, name: 'Lorem Ipsum is simply dummy text added', addr: 'San Francisco, CA', crime: 'Assault' },
        { id: 15, name: 'Lorem Ipsum is simply dummy text added', addr: 'San Francisco, CA', crime: 'Cyber bullying' },
        { id: 16, name: 'Lorem Ipsum is simply dummy text added', addr: 'San Francisco, CA', crime: 'Illegal Immigration' },
        { id: 17, name: 'Lorem Ipsum is simply dummy text added', addr: 'San Francisco, CA', crime: 'Drunk Driving' },

        { id: 18, name: 'Lorem Ipsum is simply dummy text added', addr: 'San Francisco, CA', crime: 'Animal Abuse' },
        { id: 19, name: 'Lorem Ipsum is simply dummy text added', addr: 'San Francisco, CA', crime: 'Prostitution' },
        { id: 20, name: 'Lorem Ipsum is simply dummy text added', addr: 'San Francisco, CA', crime: 'Marjuana' },
        { id: 21, name: 'Lorem Ipsum is simply dummy text added', addr: 'San Francisco, CA', crime: 'Child Abuse' },
        { id: 22, name: 'Lorem Ipsum is simply dummy text added', addr: 'San Francisco, CA', crime: 'Assault' },
        { id: 23, name: 'Lorem Ipsum is simply dummy text added', addr: 'San Francisco, CA', crime: 'Cyber bullying' },
        { id: 24, name: 'Lorem Ipsum is simply dummy text added', addr: 'San Francisco, CA', crime: 'Illegal Immigration' },
        { id: 25, name: 'Lorem Ipsum is simply dummy text added', addr: 'San Francisco, CA', crime: 'Drunk Driving' },
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
    

  ngOnInit() {
  }

    showMessage(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template, { class: 'modal-md modal-dialog-centered', ignoreBackdropClick: false, keyboard: false });
        return this.modalRef;
    }

    constructor(private modalService: BsModalService) {}
}
