// let mode = process.env.NODE_ENV // 当前启动模式
// const IS_PROD = ['production', 'prod'].includes(mode) //判断当前是否是生产模式
// const NEED_MOCK = ['development', 'serve'].includes(mode)
// const port = process.env.port || process.env.npm_config_port || 8080

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
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/api': '/mock',
        },
      },
    },
  },

  //代理转发
  // devServer: {
  //   host: 'localhost',
  //   port: 8080,
  //   open: true, //配置自动启动浏览器
  //   proxy: {
  //     // 这里监听一个别名，下面替换掉
  //     '/api': {
  //       //这里最好有一个 /
  //       target: 'http://localhost:8080/', // 后台接口域名
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/api': '/public/mock', //替换成
  //       },
  //     },
  //   },
  // },
}
