import { defineConfig } from "vitepress";

export default defineConfig({
  title: "进击的少年",
  description: "进击的少年",
  themeConfig: {
    sidebar: [
      {
        text: "JavaScript",
        collapsible: true,
        items: [{ text: "promise", link: "/js/promise" }],
      },
      {
        text: "TypeScript",
        collapsible: true,
        items: [
          { text: "策略模式", link: "/ts/stragegy" },
          { text: "命令模式", link: "/ts/command" },
        ],
      },
      {
        text: "Html",
        collapsible: true,
        items: [{ text: "html", link: "/html/" }],
      },
      {
        text: "Css",
        collapsible: true,
        items: [{ text: "css", link: "/css/" }],
      },
      {
        text: "Rust",
        collapsible: true,
        items: [{ text: "rust", link: "/rust/" }],
      },
    ],
  },
});
