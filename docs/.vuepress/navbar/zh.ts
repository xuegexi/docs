import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
    {
        text: '版本',
        link: 'latest' ,
        children: [
            { text: 'latest', link: '' },
            { text: 'v2.3', link: 'v2.3/' },
        ]
    },

]);
