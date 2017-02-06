var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
	entry: __dirname + '/app/main.js',
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.css$/,
			loader: ExtractTextPlugin.extract({
				fallbackLoader: 'style-loader',
				loader: 'css-loader'
			})
		}, {
			test: /\.less/,
			loader: ExtractTextPlugin.extract({
				fallbackLoader: 'style-loader',
				loader: "css-loader!less-loader"
			})

		},
		{
			test:/\.js$/,
			loader:'babel-loader',
			exclude:/node_modules/  //排除的文件夹
		}

 ]},
 //babel 配置
 // babel:{
 // 	presets:['es2015','stage-0'],
 // 	plugins:['transform-runtime']
 // },

	//把jquery 暴露到全局
	externals: {
		'jquery': 'window.jQuery',
		'vue':'Vue'
	},
	//html  模板 会自动把打包的js,css 加载到模板中
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + "/app/tpl.html" //new 一个这个插件的实例，并传入相关的参数
		}),
		  //new webpack.optimize.OccurenceOrderPlugin(),
		    //new webpack.optimize.UglifyJsPlugin(),
		    new ExtractTextPlugin("[name]-[hash].css")
	],
};