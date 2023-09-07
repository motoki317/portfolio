import { defaultTheme } from "vuepress";

export default {
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
};
