const HTMLWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const PUBLIC_DIR = 'public';

module.exports = {
    watch: true,
    devServer: {
        contentBase: path.join(__dirname, PUBLIC_DIR),
        hot: true,
        port:3000
    },
    entry: path.resolve(__dirname, 'src', 'main.js'),
    mode: 'development',
    module: {
        rules: [
            {
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        '@babel/preset-env'
                    ]
                },
                test: /\.js$/
            },
            {
                exclude: /node_modules/,
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader',
                },{
                    loader: 'css-loader',
                },{
                    loader: 'postcss-loader',
                    options: {
                        plugins: function() {
                            return [
                                require('precss'),
                                require('autoprefixer')
                            ];
                        }
                    }
                },{
                    loader: 'sass-loader'
                }]
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    optimization: {
        minimizer:[new UglifyJsPlugin({
            exclude: /node_modules/
        })]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, PUBLIC_DIR, 'index.html')
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    target: 'web'
}