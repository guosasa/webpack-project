const path = require('path')
/*
module.exports = {
  mode: 'development',
  entry: './src/js/index',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: {
          loader: 'file-loader',
          options: {
            outputpath: 'imgs',
        }
        },

      }
    ]
  }
}
*/
/*env 环节配置 argv所有webpack中能用到选项*/
module.exports = function (env, argv) {
  env = env || {development: true}
  return {
    entry: './src/js/index',
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(js|jsx)$/i,
          use: {
            loader: 'eslint-loader',
            options: {

            }
          },
          /*不处理node-modules文件中的内容*/
          exclude: /node_modules/,

        },
        {
          test: /\.(png|jpg|gif)$/i,
          use: {
            loader: 'file-loader',
            options: {
              outputpath: 'imgs',
            }
          },

        }
      ]
    },
    ...env.production ? require('./config/webpack.dist') : require('./config/webpack.start')
  }
}
