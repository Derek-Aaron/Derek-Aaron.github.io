import { sidebar } from "vuepress-theme-hope";

export const defaultSidebar = sidebar({
  "/": [
    {
      text: "文章",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
  ],
});
