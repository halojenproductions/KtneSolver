const path = require('path')

module.exports = {
	// context: __dirname,
	entry: './src/js/main.ts',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js',
		// publicPath: '/dist/',
	},
	devServer: {
		static: path.resolve(__dirname, 'src'),
		port: 8080,
		hot: true
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: [
					/node_modules/,
					/playwright/,
					/\.config.ts$/,
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
	}
}