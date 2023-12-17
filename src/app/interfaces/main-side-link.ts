interface SubLinks {
  title: string;
  to: string;
}

export interface MainSideLink {
  title: string;
  to: string;
  image: string;
  subroutes: SubLinks[];
}
