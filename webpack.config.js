module.exports = {
    entry: [
        './src/main.js'
    ],
    output: {
        path: __dirname,
        publicPath: '/public',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './public'
    }
};
