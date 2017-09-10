const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		'app': path.resolve('./docs/src/index.js')
	},
	devServer: {
		contentBase: path.resolve('./docs'),
		compress: true,
		port: 9000
	},
	output: {
		path: path.resolve('./docs'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					plugins: [
						'transform-runtime',
						[
							'transform-react-jsx', { pragma: 'h' }
						]
					],
					presets: [
						'es2015'
					]
				}
			}
		]
	},
	plugins: [
		{
			test: /\.scss$/,
			exclude: /node_modules/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: ['css-loader', 'sass-loader']
			})
		}
	],
	node: {
		fs: 'empty'
	}
};