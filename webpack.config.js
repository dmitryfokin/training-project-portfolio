const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
	entry: {
		main: path.resolve(__dirname, 'src', 'app.js'),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/main.js',
	},
	devServer: {
		port: 4200,
		host: 'localhost',
		contentBase: path.resolve(__dirname, 'dist'),
		open: true,
	},
	module: {
		rules: [
			{
				test: /\.pug$/,
				loader: "pug-loader",
				options: {
					pretty: true,
				},
			},
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new CopyWebpackPlugin([{
			from: path.resolve(__dirname, 'src', 'img'),
			to: path.resolve(__dirname, 'dist', 'img')
		}]),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'pug', 'pages', 'index.pug'),
			filename: path.resolve(__dirname, 'dist', 'index.html')
		}),
	]
}
