const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

var jsonfile = path.resolve(process.cwd(), "package.json")
var packageJson = require(jsonfile);

const outputObj = {
  path: path.resolve(__dirname, 'dist/'),
  chunkFilename:'[name].[chunkhash:8].js',
  filename: "[name].bundle.js",
  publicPath: ""
}

const varLibraryTarget = {
  library: 'outputDemoApp',
  libraryTarget: 'var',  // 可选的值为：var、this、window、global、commonjs、commonjs2、amd、amd-require、umd等。
  // https://twindy.org/webpackda-bao-umdde-exportwen-ti/
  libraryExport: 'default', // 默认为_entry_return_ 用途未知
}

// this, window, global都类似
const thisLibraryTarget = {
  library: 'outputDemoApp',
  libraryTarget: 'global',  // 可选的值为：var、this、window、global、commonjs、commonjs2、amd、amd-require、umd等。
  // https://twindy.org/webpackda-bao-umdde-exportwen-ti/
  libraryExport: 'default', // 默认为_entry_return_ 用途未知
}

const commonjsLibraryTarget = {
  library: 'outputDemoApp',
  libraryTarget: 'commonjs',  // 可选的值为：var、this、window、global、commonjs、commonjs2、amd、amd-require、umd等。
  // https://twindy.org/webpackda-bao-umdde-exportwen-ti/
  // libraryExport: 'default', // 默认为_entry_return_ 用途未知
}

module.exports = {
  //https://www.webpackjs.com/configuration/output/#output-library
  output: {
    ...outputObj,
    // ...varLibraryTarget
    // ...thisLibraryTarget
    ...commonjsLibraryTarget
  },
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
    new CleanWebpackPlugin()
  ],
}
