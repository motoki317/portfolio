import { defineUserConfig } from "vuepress";
import viteBundler from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  bundler: viteBundler(),
  title: "toki's portfolio",
  head: [
    ['link', {
      href: 'https://use.fontawesome.com/releases/v5.15.2/css/all.css',
      rel: 'stylesheet'
    }]
  ],
  theme: defaultTheme({
    navbar: [
      { text: "Home", link: "/" },
      { text: "Works", link: "/works" }
    ]
  }),
});
