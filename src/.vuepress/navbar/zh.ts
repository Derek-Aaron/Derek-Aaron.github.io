import { navbar } from "vuepress-theme-hope";

export const defaultNavbar = navbar([
  "/",
  {
    text: '博文',
    icon: 'pen-to-square',
    prefix: '/zh/posts/',
    children: []
  },
  {
    text: "源码",
    icon: "book",
    link: "https://github.com/Derek-Aaron/Derek-Aaron.github.io",
  },
]);
