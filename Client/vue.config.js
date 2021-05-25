const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, '../public'),
  chainWebpack: config => {
    config.module.rules.delete('eslint');
},
  transpileDependencies: ["vuetify"]
  
}