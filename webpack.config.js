const webpack = require('webpack')

module.exports = {
	entry: './src/index.js',
	output: {
    path: __dirname + '/public',
		filename: './bundle.js'
	},
	devServer: {
		contentBase: './public',
		port: 3333
	}
}