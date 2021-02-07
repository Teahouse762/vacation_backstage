const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  chainWebpack: config => {
    // 添加别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('api', resolve('src/api'))
      .set('views', resolve('src/views'))
      .set('components', resolve('src/components'))
      .set('http', resolve('src/http'))
  },
  devServer: {
    proxy: {
        '/api': {
            target: 'http://admintest.happymmall.com',
            changeOrigin: true,
            ws:false,
            pathRewrite: {
                '^/api': '',
            },
        },
    }
}
}