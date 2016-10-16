const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

// TODO:
// - Minify
// - Define plugin
// - Extract css

module.exports = {
  entry: {
    app: ['./src/index.js'],
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
