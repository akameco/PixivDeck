'use strict';
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
	devtool: false,

	entry: [
		'babel-polyfill',
		'./app/index'
	],

	output: {
		publicPath: '../dist/'
	},

	module: {
		loaders: [
			{
				test: /\.global\.css$/,
				loader: ExtractTextPlugin.extract(
					'style-loader',
					'css-loader'
				)
			},
			{
				test: /^((?!\.global).)*\.css$/,
				loader: ExtractTextPlugin.extract(
					'style-loader',
					'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
				)
			}
		]
	},

	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				screw_ie8: true, // eslint-disable-line camelcase
				warnings: false
			}
		}),
		new ExtractTextPlugin('style.css', {allChunks: true})
	],

	target: 'electron-renderer'
});
