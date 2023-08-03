const path = require('path')
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	// context: __dirname,
	entry: './src/js/main.ts',
	devtool: 'inline-source-map',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		// publicPath: '/dist/',
		clean: true,
	},
	devServer: {
		static: path.resolve(__dirname, 'src'),
		port: 8080,
		hot: true
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: [
					/node_modules/,
					/playwright/,
					/\.config.ts$/,
					/\.config.js$/,
					/\.spec.ts$/
				],
				use: ["babel-loader"],
			},
			{
				test: /\.(ts|tsx)$/,
				exclude: [
					/node_modules/,
					/playwright/,
					/\.config.ts$/,
					/\.config.js$/,
					/\.spec.ts$/
				],
				use: {
					loader: 'ts-loader',
				},
			},
			{
				test: /\.(scss)$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: () => [
									require('autoprefixer')
								]
							}
						}
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
	},
	plugins: [
		new CopyPlugin({
			patterns: [
				{ from: "src/index.html", to: "index.html" },
				{ from: "src/img", to: "img/" },
				{ from: "src/icons", to: "icons/" },
			],
		}),
	],
}