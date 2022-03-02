const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development': 'production',
    devtool: isDevelopment ? 'eval-source-map': 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 8000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    module:{
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_moudules/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                exclude: /node_moudules/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                exclude: /node_moudules/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    }
}