const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('components', resolve('./src/components'))
      .set('views', resolve('./src/views'))
      .set('assets', resolve('./src/assets'))
      .set('styles', resolve('./src/assets/styles'))
    //set第一个参数：设置的别名，第二个参数：设置的路径
  },
}