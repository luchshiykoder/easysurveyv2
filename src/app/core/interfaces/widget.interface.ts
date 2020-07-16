interface ILinks {
  name: string;
  iconClass: string;
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