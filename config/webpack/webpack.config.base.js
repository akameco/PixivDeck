'use strict';
const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.yml$/,
        loader: 'json-loader!yaml-loader',
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['', '.js', '.json'],
    root: [path.resolve('./app/')],
    packageMains: [
      'webpack',
      'browser',
      'web',
      'browserify',
      ['jam', 'main'],
      'main',
    ],
  },
  plugins: [],
  externals: [],
};
