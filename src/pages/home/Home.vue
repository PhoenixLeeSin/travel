<template>
  <div>
    <HomeHeader :city="city" />
    <HomeSwiper :dataArray="swiperList" />
    <HomeIcons :iconsArray="iconList" />
    <HomeRecommend :recommendList="recommendList" />
    <HomeWeekend :weekendList="weekendList" />
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import HomeRecommend from './components/Recommend.vue'
import HomeWeekend from './components/Weekend.vue'

import axios from 'axios'

export default {
  name: 'Home',
  components: { HomeHeader, HomeSwiper, HomeIcons, HomeRecommend, HomeWeekend },
  data: function () {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
    }
  },
  methods: {
    getHomeInfo() {
      axios.get('/api/index.json').then(this.getHomeInfoSuc)
    },
    getHomeInfoSuc(res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    },
  },
  mounted() {
    this.getHomeInfo()
  },
}
</script>

<style lang="stylus" scoped></style>
