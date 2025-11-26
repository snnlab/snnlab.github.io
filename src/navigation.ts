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
          text: 'KSHAP',
          href: getPermalink('/publications/kshappub'),
        },
        {
          text: 'KSAH',
          href: getPermalink('/publications/ksahpub'),
        },
        {
          text: 'Books & Book chapters',
          href: getPermalink('/publications/books'),
        },
      ],
    },
    {
      text: 'News',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [],
  footNote:
    'Website template by <a class="text-blue-600 underline dark:text-muted" href="https://github.com/arthelokyo"> Arthelokyo<a/>',
};
