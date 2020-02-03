const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		main: path.resolve(__dirname, 'src', 'app.js'),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/main.js',
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
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'pug', 'pages', 'index.pug'),
			filename: path.resolve(__dirname, 'dist', 'index.html')
		})
	]
}
