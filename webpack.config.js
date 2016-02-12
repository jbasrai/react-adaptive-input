const path = require('path');

module.exports = {
	entry: path.join(__dirname, 'src/index.js'),
	output: {
		filename: 'index.js',
		path: __dirname + '/dist',	
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
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
	}
};