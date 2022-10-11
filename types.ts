export interface Portfolio {
  portfolios: {
    _id: string;
    githubLink: string;
    siteImage: {
      asset: {
        _ref: string;
        type: 'string';
      };
    };
    title: string;
    tools: Array<string>;
    websiteLink: string;
  }[];
}
