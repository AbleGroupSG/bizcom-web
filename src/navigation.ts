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
        { text: 'Annual General Meeting Singapore Requirement', href: getPermalink('/blog') },
        { text: 'Valuation for Duties and GST', href: getPermalink('/blog') },
        { text: 'Why incorporate your company in Singapore?', href: getPermalink('/blog') },
        { text: 'Singapore Goods and Services Tax (GST)', href: getPermalink('/blog') },
        { text: 'Presentation of Profit or Loss and Other Comprehensive Income', href: getPermalink('/blog') }
      ],
    },
    {
      title: '_',
      links: [
        { text: 'Singapore Accounting Standards', href: getPermalink('/blog') },
        { text: 'Singapore Company Secretary Duties', href: getPermalink('/blog') },
        { text: 'Consequences of Filing Taxes or Not Filing', href: getPermalink('/blog') },
        { text: 'What is SFRS for Small Entities', href: getPermalink('/blog') },
        { text: 'What to Expect During an IRAS Audit', href: getPermalink('/blog') }
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [],
  footNote: '',
};
