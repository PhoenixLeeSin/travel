<template>
  <div class="wrapper">
    <router-link to="/">
      <span class="iconfont wrapper-back">&#xe679;</span>
    </router-link>
    <span class="wrapper-title">城市选择</span>
  </div>
</template>

<script>
export default {
  name: 'CityHeader',
}
</script>

<style lang="stylus" scoped>
.wrapper {
  display: flex
  line-height: 0.88rem;
  background: #00bcd4;
  color: #fff;
  font-size: 0.32rem;
  .wrapper-back {
    margin-left: 0.2rem
    font-size: 0.36rem
  }
  .wrapper-title {
    flex: 1
    text-align: center;
  }
  // 去除routerlink 样式
  a {
    color: #fff
    text-decoration: none
  }
}
</style>
