export type tSocialItem = {
  name: string;
  url: string;
};

export type tEntity = {
  id: number;
  name: string;
  description: string;
  logo: string;
  socials: tSocialItem[];
  children?: tEntity[];
};
