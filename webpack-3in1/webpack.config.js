const path = require('path')

const StyleLintPlugin = require('stylelint-webpack-plugin')
module.exports = function (env, argv) {
  env = env || {development: true};

  let conf = null
  if(env.production) {
    conf = require('./config/webpack.production')
  } else if (env.test) {
    conf = require('./config/webpack.test')
  } else  {
    conf = require('./config/webpack.development')
  }
  return {
    entry: './src/js/index',
    module: {
      rules: [
        //js
        {
          test: /\.(js|jsx)$/i,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            },
            {
              loader: 'eslint-loader',
              options: {
                exclude: /node_modules|brower_modules/
              }
            },
          ]
        },
        //css
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader', {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')]
            }
          }]
        },
        //less
        {
          test: /\.less$/i,
          use: ['style-loader', 'css-loader', 'less-loader']
        },
        //img
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/,
          use: [{
            loader: 'file-loader',
            options: {
              outputPath: 'img',
              //name: '[name]_[hash:8].[ext]'
            }
          }]
        },
        //font
        {
          test: /\.(ttf|eot|woff|woff2|otf)$/,
          use: [{
            loader: 'file-loader',
            options: {
              outputPath: 'font',
              // name: '[name]_[hash:8].[ext]'
            }
          }]
        },
      ],
    },
    ...conf
  }
}
/*module.exports = {
  mode: 'development',
  entry: './src/js/index',
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new StyleLintPlugin({
      files: ['**!/!*.css', '**!/!*.less', '**!/!*.html', '**!/!*.vue'] // 任意层的css 任意文件下的后缀文件
    })
  ]
}*/

