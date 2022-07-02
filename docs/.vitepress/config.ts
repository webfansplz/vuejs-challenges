import { defineConfig } from "vitepress"
import { categorys, navMenu } from "../meta"
const defaultSidebar = [
  {
    text: "Introduction",
    items: [
      {
        text: "Getting Started",
        link: "/getting-started",
      },
    ],
  },
  {
    text: "Guide",
    items: [
      {
        text: "How to Contribute",
        link: "/guide/contribution",
      },
    ],
  },
  {
    text: "Challenges",
    items: categorys,
  },
]

const nav = [
  ...defaultSidebar,
]

export default defineConfig({
  title: "Vue.js challenges",
  description: "Collection of Vue.js challenges",
  // appearance: false,
  lastUpdated: true,
  themeConfig: {
    sidebar: {
      "/challenges": navMenu,
      "/questions/": navMenu,
      "/": defaultSidebar,
    },
    nav,
    socialLinks: [
      { icon: "github", link: "https://github.com/webfansplz/vuejs-challenges" },
    ],
    footer: {
      copyright: "Copyright © 2022-present webfansplz",
    },
    editLink: {
      pattern: "https://github.com/webfansplz/vuejs-challenges",
      text: "Edit this page on Gitlab",
    },
    lastUpdatedText: "Last Updated",
  },
})
