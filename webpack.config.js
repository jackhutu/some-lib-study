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
  resolve: {
    // alias: {
    //   'systemjs': path.resolve(__dirname, './systemjs/src/system.js'),
    //   'systemjs-extras-amd': path.resolve(__dirname, './systemjs/src/extras/amd.js'),
    // }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
  devServer: {
    contentBase: [path.join(__dirname, './src')],

    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    },
    historyApiFallback: true,
    overlay: { warnings: false, errors: true },
  },
  
}
