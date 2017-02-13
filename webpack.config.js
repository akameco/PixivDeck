'use strict'
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

const port = 3000

module.exports = merge(baseConfig, {
	cache: true,

	entry: [
		'babel-polyfill',
		'./app/index',
	],

	debug: true,

	target: 'electron-renderer',

	devtool: '#inline-source-map',

	output: {
		publicPath: `http://localhost:${port}/dist`,
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel?cacheDirectory',
				exclude: /node_modules/,
			},
		],
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development'),
		}),
	],
})
