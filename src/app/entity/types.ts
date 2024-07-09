export type tSocialItem = {
    name: string,
    url: string
};

export type tEntity = {
    name: string,
    description: string,
    logo: string,
    socials: tSocialItem[],
    children: tEntity[]
};