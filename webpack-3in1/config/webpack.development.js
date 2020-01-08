const StyleLintPlugin = require('stylelint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
  mode: 'development',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new StyleLintPlugin({
      files: ['**/*.css', '**/*.less', '**/*.html', '**/*.vue'] // 任意层的css 任意文件下的后缀文件
    }),
    new HtmlWebpackPlugin({
      template: path.resolve('_dirname', '../index.html')
    })
  ],
  devtool: 'source-map'
}
