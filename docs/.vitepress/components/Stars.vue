<template>
  <div class='stars-container'>
    <div v-for='filled of stars' class='stars-container'>
      <StarFilled v-if='filled' class='c-yellowgreen' />
      <StarUnfilled v-else class='c-yellowgreen' />
    </div>
  </div>
</template>

<script>
import StarFilled from './StarFilled.vue'
import StarUnfilled from './StarUnfilled.vue'

export default {
  name: 'Stars',
  components: {
    StarFilled,
    StarUnfilled,
  },
  props: {
    filled: {
      type: Number
    },
    max: {
      type: Number
    }
  },
  computed: {
    stars() {
      const stars = new Array(this.max).fill(false)
      for (let i = 0; i < Math.min(this.filled, this.max); i++) {
        stars[i] = true
      }
      return stars
    }
  }
}
</script>

<style>
.stars-container {
  display: inline;
}

.c-yellowgreen {
  color: yellowgreen
}
</style>
