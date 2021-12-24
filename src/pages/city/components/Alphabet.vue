<template>
  <div class="wrapper">
    <ul class="list">
      <li
        v-for="item in alphabetArray"
        :key="item"
        @click="() => handleClick(item)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'CityAlphabet',
  props: {
    alphabetArray: [],
  },
  methods: {
    ...mapActions(['changeAlphabet']),
    handleClick(alphabet) {
      if (alphabet) {
        this.changeAlphabet(alphabet)
      }
    },
  },
}
</script>
<style lang="stylus" scoped>
.wrapper {
  position: fixed
  right: 0.2rem
  top: 50%
  transform: translateY(-50%)
  ul li {
    list-style-type: none
    color: #00bcd4
    font-size: 0.26rem
    font-weight: 500
    text-align: center
  }
}
</style>
