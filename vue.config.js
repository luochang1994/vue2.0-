const path = require('path')
function resolve(dir){
  return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
}
console.log(path)
module.exports = {
  lintOnSave: false,
  devServer: {
    // port: 8081,
    proxy: {
      '/starr-web/': {
        target: 'http://47.115.145.19:8000/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/starr-web': '/starr-web/',
        },
      },
    },
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/styles/imports.less'),
      ],
    },
  },
  chainWebpack:(config)=>{
    config.resolve.alias
    //set第一个参数：设置的别名，第二个参数：设置的路径
    .set('@',resolve('./src'))
    .set('components',resolve('./src/components'))
    .set('assets',resolve('./src/assets'))
    .set('views',resolve('./src/views'))
  }
}
