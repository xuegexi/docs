import { navbar } from 'vuepress-theme-hope';

export const zhNavbar = navbar([
  {
    text: '版本',
    icon: 'circle-info',
    prefix: '/zh/',
    children: [
      'v2.2.0/',
      'v2.3.0/',
    ],
  },
]);
