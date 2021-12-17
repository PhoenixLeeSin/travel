<template>
  <div class="icons">
    <swiper :options="swiperOptions">
      <swiper-slide
        v-for="(itemArray, index) in dimensionConversion"
        :key="index"
      >
        <div class="icon" v-for="(item, index) in itemArray" :key="index">
          <img :src="item.imageUrl" class="icon-image" />
          <p class="icon-title">{{ item.name }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data: function () {
    return {
      iconsArray: [
        {
          imageUrl:
            'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/36d99efa6f2aa91f1ec9d18ce57fd5e3.png',
          name: '酒店套餐',
        },
        {
          imageUrl:
            'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/69e8b07cb2d438c5530aebd4c8e3abd3.png',
          name: '一日游',
        },
        {
          imageUrl:
            'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/a9d33792bd961b1692638d86cf3e6b83.png',
          name: '滑雪',
        },
        {
          imageUrl:
            'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/557ba25df01d7dbf1419b095a11d1319.png',
          name: '温泉',
        },
        {
          imageUrl:
            'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/d706a4d71c57c53ee8863b75a7af30cf.png',
          name: '名胜古迹',
        },
        {
          imageUrl:
            'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/c4c5c620f20535ff358788a508c20921.png',
          name: '主题乐园',
        },
        {
          imageUrl:
            'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/ace59857fe268552aa556189953aa369.png',
          name: '自然风光',
        },
        {
          imageUrl:
            'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/aba25fb84648c130561afa5398d3552a.png',
          name: '动植物园',
        },
        {
          imageUrl:
            'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/ace59857fe268552aa556189953aa369.png',
          name: '自然风光',
        },
        {
          imageUrl:
            'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/aba25fb84648c130561afa5398d3552a.png',
          name: '动植物园',
        },
      ],
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
      console.log(len)
      console.log(this.$data.iconsArray)
      let len = this.$data.iconsArray.length

      let n = 8
      let numbers = len % 8 === 0 ? len / 8 : Math.floor(len / n + 1)
      let res = []
      for (let i = 0; i < numbers; i++) {
        // slice() 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变
        let temp = this.$data.iconsArray.slice(i * n, i * n + n)
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
