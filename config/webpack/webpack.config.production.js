'use strict'
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
	devtool: false,

	entry: [
		'babel-polyfill',
		'./app/index',
	],

	output: {
		publicPath: '../dist/',
	},

	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production'),
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
