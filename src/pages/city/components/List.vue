<template>
  <div class="wrapper" ref="wrapperscroll">
    <div class="content">
      <div class="area">
        <div class="title">热门城市</div>
      </div>
      <div class="hot-cities">
        <div v-for="item in hotCities" :key="item.id" class="hot-city">
          {{ item.name }}
        </div>
      </div>
      <div v-for="item in Object.keys(cities)" :key="item" :ref="item">
        <div class="area">
          <div class="title">{{ item }}</div>
        </div>
        <div class="city-list">
          <div
            v-for="element in cities[item]"
            :key="element.id"
            class="city-item"
          >
            {{ element.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
import { mapState } from 'vuex'
export default {
  name: 'CityList',
  data() {
    return {
      scroll: null,
    }
  },
  props: {
    cities: {},
    hotCities: [],
  },
  mounted() {
    // let scroll = new BetterScroll(this.$refs.wrapper, {})
    // console.log(this.scroll)
    // this.scroll.on('scroll', (event) => console.log(event))
  },
  updated() {
    this.$nextTick(() => {
      if (this.scroll) {
        this.scroll.refresh()
        return
      }
      this.scroll = BetterScroll(this.$refs.wrapperscroll, {
        probeType: 3,
        scrollY: true,
        scrollX: false,
        mouseWheel: true,
        disableMouse: false,
        disableTouch: false,
      })
    })
  },
  computed: {
    ...mapState(['alphabet']),
  },
  watch: {
    alphabet: function (newValue, oldValue) {
      console.log(newValue, oldValue)
      console.log(this.$refs[newValue][0])
      console.log(this.scroll)
      this.scroll.scrollToElement(this.$refs[newValue][0], 100, 0, 0, 'easing')
    },
  },
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.wrapper {
  background: #fff
  overflow: hidden
  top: 1.52rem
  height: calc(100vh - 1.52rem)
  .area {
    box-sizing: border-box
    height: 0.72rem
    background: $lineColor
    // background: red
    .title {
      padding: 0.24rem 0.3rem
      line-height: 0.24rem
      color: $darkTextColor
      font-size: 0.24rem
    }
  }
  .hot-cities {
    overflow: hidden
    width: 100%
    .hot-city {
      width: calc((100% - 3px) / 3)
      line-height: 0.9rem
      float: left
      text-align: center
      border-right: 1px solid $lineColor
      border-bottom: 1px solid $lineColor
    }
  }
  .city-list {
    overflow: hidden
    width: 100%
    .city-item {
      width: calc((100% - 4px) / 4)
      line-height: 0.9rem
      float: left
      text-align: center
      border-right: 1px solid $lineColor
      border-bottom: 1px solid $lineColor
    }
  }
}
</style>
