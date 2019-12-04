const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle.min.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html'),
    })
  ]
};
/*bundle.min.js production是压缩过的文件
* bundle.js development下面不是压缩的，没有path的原因是，使用webpack-dev-server打包的文件放在内存中的
* /*--open可以直接在浏览器中打开 */
