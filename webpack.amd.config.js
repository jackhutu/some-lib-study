const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

var jsonfile = path.resolve(process.cwd(), "package.json")
var packageJson = require(jsonfile);

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist/'),
    chunkFilename:'[name].[chunkhash:8].js',
    filename: "[name].bundle.js",
    library: packageJson.name,
    libraryTarget: "amd",
    publicPath: ""
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
