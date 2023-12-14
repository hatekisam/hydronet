interface OtherTag {
  image: string;
  title: string;
}

export interface PrefferedSponsoredChoice {
  image: string;
  title: string;
  subTitle: string;
  tags: string[];
  otherTags: OtherTag[];
  body: string;
}
