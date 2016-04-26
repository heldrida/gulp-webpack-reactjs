var path = require('path');
var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'app');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

var config = {
	entry: [
		APP_DIR + '/index.js'
	],
	output: {
		path: BUILD_DIR,
		filename: "index_bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel"
			}
		]
	},
	plugins: [
		HtmlWebpackPluginConfig
	]
};

module.exports = config;
