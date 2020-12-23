const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
  devtool: 'cheap-module-source-map',
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
  resolve: {
    alias: {
      'import-html-entry': path.join(__dirname, './import-html-entry-source/src')
    }    
  },
  devServer:{
    contentBase: [path.join(__dirname, './src')],
  }
}
