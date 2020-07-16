import { IWidget } from '@app/core';
import { faPaperPlane, faPauseCircle, faList, faCheck } from '@fortawesome/free-solid-svg-icons';

export const cardData: IWidget[] = [
  {
    cardTitle: ' Create a new Survey',
    cardTitleImage: '../assets/start.png',
    cardSubheader: 'Start Survey?',
    cardSubheaderClass: 'text-secondary',
    cardText: 'Create your new survey for taking feedback of your users with online coversation.',
    links: [
      { name: ' Create New', iconClass: faPaperPlane, class: 'btn btn-secondary btn-sm', link: '' },
      { name: ' Draft Survey', iconClass: faPauseCircle, class: 'btn btn-light btn-sm', link: '' }
    ]
  },
  {
    cardTitle: ' OnGoing Survey',
    cardTitleImage: '../assets/ongoing.png',
    cardSubheader: 'Live Survey',
    cardSubheaderClass: 'text-warning',
    cardText: 'Check your ongoing survey for multiple online business persepective coversation.',
    links: [
      {
        name: ' Index Survey',
        iconClass: faList,
        class: 'btn btn-warning btn-sm',
        link: ''
      },
    ],
    spanText: {
      text: 'Last Publish: SBI- 25th Jan 2020', class: 'badge text-warning'
    }
  },
  {
    cardTitle: ' Completed Survey',
    cardTitleImage: '../assets/complete.png',
    cardSubheader: 'Completed',
    cardSubheaderClass: 'text-success',
    cardText: 'Extend date and check your all completed surevy with all status score. Complete Details.',
    links: [
      {
        name: 'Completed Survey',
        iconClass: faCheck,
        class: 'btn btn-success btn-sm',
        link: ''
      },
    ],
    spanText: {
      text: 'Last Completed: TATA- 10th May 2019',
      class: 'badge text-success'
    }
  },
];
