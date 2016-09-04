'use strict';
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
	devtool: false,

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
		'electron-referer',
		'electron-context-menu',
		'pixiv.js',
		'pixiv-app-api',
		'electron-dl',
		'dot-prop'
	]
});
