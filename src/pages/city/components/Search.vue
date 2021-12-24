<template>
  <div class="wrapper">
    <input type="text" class="wrapper-input" placeholder="输入城市名或者拼音" />
  </div>
</template>

<script>
export default {
  name: 'CitySearch',
}
</script>

<style lang="stylus" scoped>
.wrapper {
  // position: absolute
  // top: 0.88rem
  height: 0.64rem
  width: 100%
  background: #00bcd4
  text-align: center
  .wrapper-input {
    box-sizing: border-box
    margin: 0.2 0
    height: 0.6rem
    outline: none
    border: 0
    border-radius: 3px
    width: 96%
    padding: 0 0.2rem
  }
}
</style>
