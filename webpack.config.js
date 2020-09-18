const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',     // To run babel
                test: /\.js$/,
                exclude: /node_modules/
            },{
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map',  // using tool to find exact place where error was occured
    devServer: {
        contentBase: path.join(__dirname, 'public')  // to run live-server
    }
};