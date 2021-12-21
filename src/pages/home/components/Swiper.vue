<template>
  <div class="wrapper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item in dataArray" :key="item.id">
        <img class="swiper-image" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    dataArray: [],
  },
  data() {
    return {
      swiperOptions: {
        autoplay: true,
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
  mounted() {},
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active{
  background #fff
}
.wrapper {
  width: 100%
  height: 0
  overflow: hidden
  padding-bottom: 31.25%
}
.swiper-image {
  width: 100%
}
</style>
