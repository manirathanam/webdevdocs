export default {
  lang: "en-US",
  title: "web dev docs",
  titleTemplate: "vue latest docs",
  description: " documentation for developers",
  themeConfig: {
    nav: [{ text: "Vue", link: "/vue/" }],
    sidebar: {
      "/vue/": [
        {
          text: "Vue",
          items: [
            { text: "Components", link: "/vue/vue-3-components.md" },
            { text: "Watch", link: "/vue/vue-3-watcher.md" },
            { text: "Computed", link: "/vue/vue-3-computed.md" },
          ],
        },
      ],
    },
  },
};
