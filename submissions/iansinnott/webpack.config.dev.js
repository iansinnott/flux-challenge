const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

// TODO:
// - Define plugin
// - Extract css
// - Stylus
// - HMR

module.exports = {
  entry: {
    app: [
      './src/index.js',
    ],
  },

  output: {
    path: './build',
    filename: '[name].js',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src'),
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HTMLWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
