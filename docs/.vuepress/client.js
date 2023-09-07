import { defineClientConfig } from '@vuepress/client'
import StarFilled from "./components/StarFilled.vue";
import Stars from "./components/Stars.vue";
import StarUnfilled from "./components/StarUnfilled.vue";

export default defineClientConfig({
  rootComponents: [
    StarFilled,
    Stars,
    StarUnfilled,
  ],
})
