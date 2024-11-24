import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";

import theme from "./theme.js";
import {oml2dPlugin} from "vuepress-plugin-oh-my-live2d";
import options from "./oml2d.js";
const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  lang: 'zh-CN',
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "zdx 博客",
      description: "zdx的博客",
    },
  },

  theme,
  plugins: [
    oml2dPlugin(options)
  ],
  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue",
    ),
  }

  // Enable it with pwa
  // shouldPrefetch: false,
});
