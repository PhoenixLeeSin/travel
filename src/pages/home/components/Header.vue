<template>
  <div class="header">
    <div class="header-left iconfont">&#xe679;</div>
    <div class="header-input">
      <span class="header-search iconfont">&#xe6e1;</span>
      <div>输入城市游玩主题</div>
    </div>
    <router-link :to="{ path: 'city' }">
      <div class="header-right">
        {{ this.city }}
        <div class="header-city iconfont">&#xe877;</div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String,
  },
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

// 1rem = 50px  86px

.header {
  display: flex
  line-height: 0.86rem
  background: $bgColor
  color: #fff
  .header-left {
    width: 0.64rem
    float: left
    color: #fff
    padding-left: 0.12rem
  }
  .header-input {
    flex: 1
    display: flex
    // height: 0.64rem
    line-height: 0.64rem
    margin-top: 0.12rem
    margin-bottom: 0.12rem
    margin-left: 0.12rem
    background: #fff
    border-radius: 0.1rem
    color: #ccc
    .header-search {
      // display: inline-block
      // margin-top: 0.6rem
      font-size: 0.4rem
      color: #ccc

    }
  }
  .header-right {
    width: 1.24rem
    float: right
    text-align: center
    color: #fff
    .header-city {
      display: inline-block
    }
  }
}
</style>
