import { navbar } from "vuepress-theme-hope";

export const defaultNavbar = navbar([
  "/",
  {
    text: '文章',
    icon: 'wenzhang',
    prefix: '/posts/',
    children: [
      {
        text: '分类',
        icon: 'fenlei',
        link: '/category/'
      },
      {
        text: '标签',
        icon: 'biaoqian',
        link: '/tag/'
      },
      {
        text: '归档',
        icon: 'guidang',
        link: '/timeline/'
      }
    ]
  },
  {
    text: '导航',
    icon: 'daohang',
    link: '/navigation'
  },
  {
    text: '关于我',
    icon: 'guanyuwo',
    link: '/intro'
  },
  {
    text: "源码",
    icon: "yuanma",
    link: "https://github.com/Derek-Aaron/Derek-Aaron.github.io",
  },
]);
