'use strict'
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base.babel')

module.exports = merge(baseConfig, {
  devtool: false,
  mode: 'production',

  entry: ['./app/index.tsx'],

  output: {
    publicPath: '../dist/',
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true, // eslint-disable-line camelcase
        warnings: false,
      },
    }),
  ],

  target: 'electron-renderer',
})
