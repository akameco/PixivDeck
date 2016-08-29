'use strict';
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

const port = 3000;

module.exports = merge(baseConfig, {
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

	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel?cacheDirectory',
				exclude: /node_modules/
			},
			{
				test: /\.global\.css$/,
				loaders: [
					'style-loader',
					'css-loader?sourceMap'
				]
			},
			{
				test: /^((?!\.global).)*\.css$/,
				loaders: [
					'style-loader',
					'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
					'postcss-loader'
				]
			}
		]
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		})
	],

	postcss: () => [require('postcss-cssnext')()]
});
