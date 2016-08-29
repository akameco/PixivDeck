'use strict';
const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: [
		'babel-polyfill',
		'./main/index.js'
	],
	debug: true,
	target: 'electron-main',
	devtool: '#inline-source-map',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'index.js'
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		})
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel?cacheDirectory',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.json'],
		packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main']
	},
	node: {
		__dirname: false,
		__filename: false
	},
	externals: [
		'electron-config',
		'pixiv.js',
		'electron-referer'
	]
};

