import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import StarFilled from '../components/StarFilled.vue'
import Stars from '../components/Stars.vue'
import StarUnfilled from '../components/StarUnfilled.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // register your custom global components
    app.component('StarFilled', StarFilled)
    app.component('Stars', Stars)
    app.component('StarUnfilled', StarUnfilled)
  },
} satisfies Theme
