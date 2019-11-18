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
      }
    ]
  }
}
