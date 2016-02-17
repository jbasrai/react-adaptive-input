const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://0.0.0.0:3000',
		'./demo/src/index'
	],
	output: {
		filename: 'index.js',
		path: path.join(__dirname, 'dist'),
		publicPath: '/demo'
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
		root: path.join(__dirname, 'src'),
    	modulesDirectories: [
			'node_modules',
			path.join('demo', 'src')
		]
	},
	module: {
		loaders: [
			{
				query: /\.jsx\?/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};
