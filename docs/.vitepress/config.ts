import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'toki\'s portfolio',
  head: [
    ['link', {
      href: 'https://use.fontawesome.com/releases/v6.7.2/css/all.css',
      rel: 'stylesheet',
    }],
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Works', link: '/works' },
    ],
  },
})
