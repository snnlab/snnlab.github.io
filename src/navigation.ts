import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Team',
      href: getPermalink('/team/team'),
    },
    {
      text: 'Projects/Data',
      links: [
        {
          text: 'KSHAP',
          href: getPermalink('/projects/kshappro'),
        },
        {
          text: 'KSAH',
          href: getPermalink('/projects/ksahpro'),
        },
      ],
    },
    {
      text: 'Publications',
      links: [
        {
          text: 'All Publications',
          href: getPermalink('/publications/allpub'),
        },
      ],
    },
    {
      text: 'News',
      href: getBlogPermalink(),
    },
  ],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [],
  footNote:
    'Website template by <a class="text-blue-600 underline dark:text-muted" href="https://github.com/arthelokyo">Arthelokyo</a>',
};
