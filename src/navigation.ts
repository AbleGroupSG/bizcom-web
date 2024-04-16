import { getPermalink, getBlogPermalink } from './utils/permalinks';
import services from './data/services';
import knowledge from './data/knowledge';
import { getLangFromUrl, useTranslations } from './utils/utils';

const lang = getLangFromUrl(new URL('https://example.com/en/page'));

const t = useTranslations(lang);

// Header data
export const headerData = {
  links: [
    { text: t('home'), href: getPermalink('/') },
    { text: t('about'), links: services },
    { text: t('knowledgebase'), links: knowledge },
    { text: t('testimonials'), href: getPermalink('/testimonial') },
    { text: t('blog'), href: getBlogPermalink() }
  ],
  actions: [{ text: t('contact'), href: getPermalink('/contact'), target: '' }],
};

// Footer data
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
