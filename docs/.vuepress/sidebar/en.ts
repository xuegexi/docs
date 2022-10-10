import { sidebar } from 'vuepress-theme-hope';

export const zhSidebar = sidebar({
  '/en/': [
    {
      text: 'Docs',
      icon: 'note',
      prefix: 'guide/',
      children: 'structure',
    },
  ],
});
