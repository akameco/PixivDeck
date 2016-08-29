'use strict';
const webpack = require('webpack');

module.exports = {
	devtool: 'source-map',

	entry: [
		'babel-polyfill',
		'./main.development'
	],

	output: {
		path: __dirname,
		filename: 'main.js'
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

	target: 'electron-main',

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

