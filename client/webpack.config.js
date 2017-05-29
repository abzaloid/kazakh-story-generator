module.exports = {
	entry: ['./app/app.js'],
	output: {
		publicPath: '/static',
		filename: 'app.bundle.js'
	},
	module: {
		loaders: [
			{test: /\.js$/, loaders: ['babel-loader']},
			{test: /\.css$/, loaders: ['style-loader', 'css-loader']},
			{test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader']}
		]
	}
}
