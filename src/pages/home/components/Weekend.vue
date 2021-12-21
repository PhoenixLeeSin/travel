<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item in weekendList" :key="item.id">
        <img class="item-image" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: [],
  },
}
</script>

<style lang="stylus" scoped>
.title
  line-height: 0.8rem
  background: #eee
  text-indent: 0.2rem

ul
  padding: 0.2rem
  margin: 0


.item
  overflow: hidden
  height: 3.62rem
  .item-image
    width: 100%
    height: 2.4rem
  .item-info
    padding-left: 0.2rem
    min-width: 0
    .item-title
      color: #212121
      font-size: 0.30rem
      line-height: 0.44rem
      margin: 0
      ellipsis()

    .item-desc
      line-height: 0.4rem
      color: #ccc
      ellipsis()
</style>
