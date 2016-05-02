var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var rootDir = path.join(__dirname, '..');

module.exports = {
  entry: {
    module: path.join(rootDir, 'src/index.js')
  },
  resolve: {
    root: path.join(rootDir, 'src'),
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules']
  },
  output: {
    path: path.join(rootDir, 'tmp'),
    filename: "[name].js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        cacheDirectory: true,
        presets: ['es2015', 'react']
      }
    }, {
      test: /\.(scss|css)$/,
      loader: ExtractTextPlugin.extract("style", "css!sass")
    }, {
      test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
      loader: 'file-loader?name=[hash].[ext]'
    }]
  },
  plugins: [
    new ExtractTextPlugin("[hash].css"),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html'
    })
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: './tmp'
  }
};
