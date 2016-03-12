var webpack = require('webpack'),
    path = require('path');

module.exports = {
    devtool: 'eval-source-map',
    context: path.resolve('src'),
    entry: {
        main: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './main.jsx'
        ]
    },
    output : {
        path: path.resolve('build/js/'),
        publicPath: '/public/assets/js/',
        filename : './[name].js'           
    },
    devServer: {
		contentBase: 'public'
	},
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module : {
        loaders :[
            {
                test : /\.jsx?$/,
                include: path.join(__dirname, 'src'),
                // exclude : /node_modules|typings/,
                loaders : ['react-hot', 'babel?presets[]=es2015,presets[]=react'],
                
            }
        ]
    },
    resolve: {
		extensions: ['', '.js', '.jsx']
	}
}