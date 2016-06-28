'use strict';
const webpack = require('webpack');

const env = process.env.NODE_ENV || 'development';
const isDev = env === 'development';

const devtool = isDev ? '#inline-source-map' : null;
const uglify = isDev ? null : new webpack.optimize.UglifyJsPlugin({
	output: {
		comments: false
	},
	compress: {
		dead_code: true, // eslint-disable-line camelcase
		warnings: false
	}
});

const plugins = [
	new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: JSON.stringify(env)
		}
	}),
	uglify
].filter(v => v);

module.exports = {
	cache: true,
	entry: [
		'babel-polyfill',
		'./renderer/index.js'
	],
	debug: env === 'development',
	target: 'electron',
	devtool,
	output: {
		path: `${__dirname}/dist`,
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
	postcss: () => {
		return [
			require('postcss-cssnext')()
		];
	}
};
