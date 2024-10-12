export interface ICompanyMarketplace {
  title: string;
  img: string;
  industry: string;
}

export const companyMarketplaceData: ICompanyMarketplace[] = [
  {
    title: 'Baze Integration Marcetplace',
    industry: 'Affiliate',
    img: '#7b7b7b',
  },
  {
    title: 'HotSpot App Marcetplace',
    industry: 'App & Integration',
    img: '#f7542e',
  },
  {
    title: 'App Marcetplace',
    industry: 'App & Integration',
    img: '#12333c',
  },
  {
    title: 'Integration Marcetplace',
    industry: 'Affiliate',
    img: '#f3cc3c',
  },
  {
    title: 'HotSpot Integration Marcetplace',
    industry: 'Affiliate',
    img: '#45c98d',
  },
];

export interface IAssociatedCompanyData {
  title: string;
  value: string;
}

export const associatedCompanyData: IAssociatedCompanyData[] = [
  {
    title: 'Website',
    value: 'https://www.apolo.io/',
  },
  {
    title: 'Industry',
    value: 'Sales Intelligence Software',
  },
  {
    title: 'Company size',
    value: '501-1000',
  },
  {
    title: 'About',
    value:
      'Apolo.io is a market sales platform that helps accelerate the growth of an organization.',
  },
];
