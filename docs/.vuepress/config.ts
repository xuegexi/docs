import { defineUserConfig } from 'vuepress';
import theme from './theme.js';
import { searchPlugin } from '@vuepress/plugin-search';

export default defineUserConfig({
  base: '/',

  lang: 'zh-CN',

  dest: './dist',

  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],

  locales: {
    '/': {
      lang: 'zh-CN',
      title: '文档',
      description: 'CsonDB 的文档',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Docs',
      description: 'A docs for CsonDB',
    },
  },

  theme,

  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索',
        },
      },
    }),
  ],
});
