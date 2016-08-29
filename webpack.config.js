'use strict';
const path = require('path');
const webpack = require('webpack');

const port = 3000;

const plugins = [
	new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify('development')
	})
];

module.exports = {
	cache: true,
	entry: [
		'babel-polyfill',
		'./app/index.js'
	],
	debug: true,
	target: 'electron-renderer',
	devtool: '#inline-source-map',
	output: {
		publicPath: `http://localhost:${port}/dist`
	},
	plugins,
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel?cacheDirectory',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loaders: [
					'style?sourceMap',
					'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
					'postcss-loader'
				],
				exclude: /node_modules/
			}
		]
	},
	postcss: () => [require('postcss-cssnext')()]
};
