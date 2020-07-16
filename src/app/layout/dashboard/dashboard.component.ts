import { Component, OnInit } from '@angular/core';
import { IWidget, ModalComponent } from '@app/core';

import { cardData } from './card-data';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cardData: IWidget[] = cardData;
  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  openModal() {
    const initialState = {
      list: [
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...'
      ],
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(ModalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  ngOnInit(): void {
  }

}
