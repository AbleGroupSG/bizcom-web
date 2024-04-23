import { getPermalink, getBlogPermalink } from './utils/permalinks';
import services from './data/services.ts';



export const headerData = {
  links: [
    { text: 'home', href: getPermalink('/') },
    { text: 'about', href: getPermalink('/about') },
    { text: 'services', href: '#services', links: services },
    { text: 'testimonials', href: '#testimonials' },
    { text: 'faq', href: getPermalink('/faq') },
    { text: 'blog', href: getBlogPermalink() }
  ],
  actions: [{ text: 'contact', href: '#contact-us', target: '' }],
};

export const footerData = {
  links: [
    {
      title: 'Our Services',
      links: services,
    },
    {
      title: 'Recent Posts',
      links: [
        { text: 'Annual General Meeting Singapore Requirement', href: '#' },
        { text: 'Valuation for Duties and GST', href: '#' },
        { text: 'Why incorporate your company in Singapore?', href: '#' },
        { text: 'Singapore Goods and Services Tax (GST)', href: '#' },
        { text: 'Presentation of Profit or Loss and Other Comprehensive Income', href: '#' }
      ],
    },
    {
      title: '_',
      links: [
        { text: 'Singapore Accounting Standards', href: '#' },
        { text: 'Singapore Company Secretary Duties', href: '#' },
        { text: 'Consequences of Filing Taxes or Not Filing', href: '#' },
        { text: 'What is SFRS for Small Entities', href: '#' },
        { text: 'What to Expect During an IRAS Audit', href: '#' }
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [],
  footNote: '',
};
