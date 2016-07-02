'use strict';
const path = require('path');
const webpack = require('webpack');

const plugins = [
	new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify('production')
	}),
	new webpack.optimize.UglifyJsPlugin({
		output: {
			comments: false
		},
		compress: {
			warnings: false
		}
	})
];

module.exports = {
	entry: [
		'babel-polyfill',
		'./renderer/index.js'
	],
	target: 'electron-renderer',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js'
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
