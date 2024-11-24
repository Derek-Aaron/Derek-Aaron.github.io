import { defineUserConfig } from "vuepress";

import theme from "./theme.js";
import {oml2dPlugin} from "vuepress-plugin-oh-my-live2d";
import options from "./oml2d.js";

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
  ]

  // Enable it with pwa
  // shouldPrefetch: false,
});
