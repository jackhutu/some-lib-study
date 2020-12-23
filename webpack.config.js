const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          /node_modules/,
        ],
        use: [
          { loader: 'babel-loader' },
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
  devServer:{
    contentBase: [path.join(__dirname, './src')],
  }
}
