const path = require('path')
module.exports = {
  mode: 'development',
  entry: {
    index: './src/index',
    news: './src/news'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  }
}
