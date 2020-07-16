import { IWidget } from '@app/core';

export const cardData: IWidget[] = [
  {
    cardTitle: ' Create a new Survey',
    cardTitleImage: '../assets/start.png',
    cardSubheader: 'Start Survey?',
    cardSubheaderClass: 'text-secondary',
    cardText: 'Create your new survey for taking feedback of your users with online coversation.',
    links: [
      { name: ' Create New', iconClass: 'fa fa-paper-plane', class: 'btn btn-secondary btn-sm', link: '' },
      { name: 'Draft Survey', iconClass: 'fa fa-pause-circle', class: 'btn btn-light btn-sm', link: '' }
    ]
  },
  {
    cardTitle: ' OnGoing Survey',
    cardTitleImage: '../assets/ongoing.png',
    cardSubheader: 'Live Survey',
    cardSubheaderClass: 'text-warning',
    cardText: 'Check your ongoing survey for multiple online business persepective coversation.',
    links: [
      { name: ' Index Survey', iconClass: 'fa fa-list', class: 'btn btn-warning btn-sm', link: '' },
    ],
    spanText: {
      text: 'Last Publish: SBI- 25th Jan 2020', class: 'text-warning'
    }
  }
];
