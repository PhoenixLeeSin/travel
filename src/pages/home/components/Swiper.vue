<template>
  <div class="wrapper">
    <swiper :options="swiperOptions">
      <swiper-slide>
        <img
          class="swiper-image"
          src="//img1.qunarzz.com/sight/p0/1603/c8/c8795fe9072bdfa990.img.jpg_600x330_e1fe7e0e.jpg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="swiper-image"
          src="//img1.qunarzz.com/sight/p0/1707/a3/a3924161475dee37a3.img.jpg_600x330_67fe57ba.jpg"
          alt=""
        />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
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
  padding-bottom: 52%
}
.swiper-image {
  width: 100%
}
</style>
