interface OtherTag {
  image: string;
  title: string;
  number:number;
}

export interface PrefferedSponsoredChoice {
  image: string;
  title: string;
  subTitle: string;
  tags: string[];
  otherTags: OtherTag[];
  body: string;
}
