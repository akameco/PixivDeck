'use strict';
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
	devtool: 'source-map',

	entry: [
		'babel-polyfill',
		'./main.development'
	],

	output: {
		path: __dirname,
		filename: './main.js'
	},

	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false
			}
		}),
		new webpack.BannerPlugin(
			'require("source-map-support").install();',
			{raw: true, entryOnly: false}
		),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		})
	],

	target: 'electron-main',

	node: {
		__dirname: false,
		__filename: false
	},

	externals: [
		'electron-config',
		'source-map-support',
		'pixiv.js'
	]
});
