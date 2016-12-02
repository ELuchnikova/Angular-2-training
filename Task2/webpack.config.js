var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: {
        main: "./app.ts"
    },
    module: {
        preLoaders: [
            {
                test: /\.ts$/,
                loader: 'tslint'
            }
        ],
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style", "css")
            },
            {test: /\.html$/, loader: "raw"},
            {
                test: /\.(ico|png|eot|woff|woff2|ttf|svg)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                loader: 'babel-loader'
            },
            { test: /\.ts?$/, loader: 'ts-loader' }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css')
    ],
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    devtool: 'inline-source-map',
    devServer: {
        port: 3030,
        colors: true,
        historyApiFallback: true,
        inline: true,
        hot: true,
        stats: {
            colors: true
        }
    },
    tslint: {
        emitErrors: true,
        failOnHint: true
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 300
    },
    cache: true
};