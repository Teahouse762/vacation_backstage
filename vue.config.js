module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: 'http://adminv2.happymmall.com/manage/',
                changeOrigin: true, // 关于跨域的
                pathRewrite: {
                    "^/api": ''
                }
            }
        }
    }
}

//http://adminv2.happymmall.com/product/save/29