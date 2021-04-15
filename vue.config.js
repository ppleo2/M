// vue.config.js
const path = require('path');

module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias
            .set('style', path.join(__dirname, './src/assets/styles/'))
            .set('@img', path.join(__dirname, './public/static/img/'))
            .set('common', path.join(__dirname, './src/common/')) //common目录
    }
}
