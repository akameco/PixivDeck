'use strict'
const path = require('path')

module.exports = {
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loaders: [
				'babel-loader',
			],
			exclude: /node_modules/,
		},
		{
			test: /\.json$/,
			loader: 'json-loader',
		}],
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		libraryTarget: 'commonjs2',
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.json'],
		root: [
			path.resolve('./app/'),
		],
		packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main'],
	},
	plugins: [
	],
	externals: [
	],
}
