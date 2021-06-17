const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
  // libraryExport: 'default', // 默认为_entry_return_ 
}

// this, window, global都类似
const thisLibraryTarget = {
  library: 'outputDemoApp',
  libraryTarget: 'global',  // 可选的值为：var、this、window、global、commonjs、commonjs2、amd、amd-require、umd等。
  // https://twindy.org/webpackda-bao-umdde-exportwen-ti/
  libraryExport: 'default', // 默认为_entry_return_ 
}

// commonjs2和commonjs略有区别, 一个是module.exports, 一个是exports["outputDemoApp"]
const commonjsLibraryTarget = {
  library: 'outputDemoApp',
  libraryTarget: 'commonjs2',  // 可选的值为：var、this、window、global、commonjs、commonjs2、amd、amd-require、umd等。
  // https://twindy.org/webpackda-bao-umdde-exportwen-ti/
  // libraryExport: 'default', // 默认为_entry_return_ 
}

// amd和amd-require的区别是一个使用了define一个是require
const amdLibraryTarget = {
  library: 'outputDemoApp',
  libraryTarget: 'amd-require',  // 可选的值为：var、this、window、global、commonjs、commonjs2、amd、amd-require、umd等。
  // https://twindy.org/webpackda-bao-umdde-exportwen-ti/
  // libraryExport: 'default', // 默认为_entry_return_ 
}

const umdLibraryTarget = {
  library: 'outputDemoApp',
  libraryTarget: 'umd',  // 可选的值为：var、this、window、global、commonjs、commonjs2、amd、amd-require、umd等。
  // https://twindy.org/webpackda-bao-umdde-exportwen-ti/
  umdNamedDefine: true,  // 对umd模块中的amd方式命名
  // libraryExport: 'default', // 默认为_entry_return_ 用于exports的对象, 如果有export.default则此项如果是default则获取时可以省略defalut
  jsonpFunction: `webpackJsonp_outputDemoApp`, // 使用jsonp方式请求chunk时的jsonp函数, 如果在同一网页中使用了多个（来自不同编译过程(compilation)的）webpack runtime，则需要修改此选项。
  globalObject: 'window'  // 当输出为一个lib时, 这个lib所在的全局对象
}

module.exports = {
  entry: {
    bundle: './src/umd/index', 
  },
  //https://www.webpackjs.com/configuration/output/#output-library
  output: {
    ...outputObj,
    // ...varLibraryTarget
    // ...thisLibraryTarget
    // ...commonjsLibraryTarget
    // ...amdLibraryTarget
    ...umdLibraryTarget
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
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false, // 忽略有关顺序冲突的警告
    }),
  ],
}
