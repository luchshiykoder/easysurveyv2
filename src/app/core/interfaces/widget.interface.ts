import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface ILinks {
  name: string;
  iconClass: IconDefinition;
  class: string;
  link: string;
}

export interface IWidget {
  cardTitle: string;
  cardTitleImage: string;
  cardSubheader: string;
  cardSubheaderClass: string;
  cardText: string;
  links: ILinks[];
  spanText?: {
    text: string;
    class: string;
  };
}