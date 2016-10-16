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
      'webpack-dev-server/client?http://localhost:8080/',
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
    new HTMLWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
