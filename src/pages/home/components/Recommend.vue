<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item" v-for="item in recommendList" :key="item.id">
        <img class="item-image" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <div class="item-button">查看详情</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: [],
  },
  data() {},
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'

.recommend-title {
  line-height: 0.8rem
  background: #eee
  text-indent: 0.2rem
}
ul {
  padding: 0.2rem
  margin: 0

  }
.item {
  overflow: hidden
  display: flex
  height: 2.4rem
  border-bottom: 1px solid #ccc
  padding-top: 0.2rem
  .item-image {
    width: 2rem
    height: 2rem
    }
  .item-info {
    flex: 1
    padding-left: 0.2rem
    min-width: 0
    .item-title {
      color: #212121
      font-size: 0.34rem
      line-height: 0.44rem
      padding-top: 0.26rem
      margin: 0
      ellipsis()
    }
    .item-desc {
      line-height: 0.4rem
      color: #ccc
      ellipsis()
    }
    .item-button {
      display: inline-block
      line-height: 0.5rem
      margin-top: 0.2rem
      background: #ff9300
      padding: 0 0.1rem
      border-radius: 0.06rem
      color: #fff
    }
  }
}
</style>
