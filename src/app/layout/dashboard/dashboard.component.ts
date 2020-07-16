import { Component, OnInit } from '@angular/core';
import { IWidget } from '@app/core';

import { cardData } from './card-data';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cardData: IWidget[] = cardData;

  constructor() { }

  ngOnInit(): void {
  }

}
