<template>
  <div class="icons">
    <swiper :options="swiperOptions">
      <swiper-slide
        v-for="(itemArray, index) in dimensionConversion"
        :key="index"
      >
        <div class="icon" v-for="(item, index) in itemArray" :key="index">
          <img :src="item.imgUrl" class="icon-image" />
          <p class="icon-title">{{ item.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconsArray: [],
  },
  data: function () {
    return {
      swiperOptions: {
        autoplay: false,
        loop: true,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        pagination: {
          el: '.swiper-pagination',
        },
        // pagination: '.swiper-pagination',
      },
    }
  },
  computed: {
    // 一维数据转变为二维数据
    dimensionConversion: function () {
      let len = this.iconsArray.length

      let n = 8
      let numbers = len % 8 === 0 ? len / 8 : Math.floor(len / n + 1)
      let res = []
      for (let i = 0; i < numbers; i++) {
        // slice() 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变
        let temp = this.iconsArray.slice(i * n, i * n + n)
        res.push(temp)
      }
      return res
    },
  },
  methods: {},
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

.icons >>> .swiper-pagination-bullet-active{
  background #fff
}
.icons {
  margin-top: 0.2rem
  overflow: hidden
  // width: 100%
  height: 0
  padding-bottom: 50%
  .icon {
    position: relative
    float:left
    width: 25%
    height: 0
    padding-bottom: 25%
    .icon-image {
      display: block
      margin: auto
      width: 1.1rem
      height: 1.1rem
    }
    .icon-title {
      color: $darkTextColor
      font-size: 0.28rem
      text-align: center
      line-height: 0.28rem
      margin: 0.12rem 0 0 0
    }
  }
}
</style>
