const path = require('path')
module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.min.js'
  },
  module: {
    rules: [
      /*CSS*/
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              /* 自动补全前缀 */
              plugins: [require('autoprefixer')]
            }
          }
          ]
      },
      // 图片
      /*{
        test: /\.(jpg|png|gif)$/i,
        use:[
          {
            loader: 'file-loader',
            options: {
              /!*文件输出的路径*!/
              outputPath: 'imgs/', //相对路径相对于output的path
              publicPath: '/dist/imgs', // 对外路径输出到css的路径
              limit: 8*1024 // 大于8k存放在img
            }
          }
        ]
      }*/
      {
        test: /\.(jpg|png|gif)$/i,
        use:[
          {
            loader: 'url-loader',
            options: {
              /*文件输出的路径*/
              outputPath: 'imgs/', //相对路径相对于output的path
              publicPath: 'dist/imgs', // 对外路径输出到css的路径
              limit: 8*1024 // 大于8k存放在img
            }
          }
        ]
      },
      //字体格式
      {
        test: /\.(ttf|eot|woff|woff2|otf)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'font',
            name: '[name]_[hash:8].[ext]'
          }
        }]
      },
    ]
  }
}
