var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var InlineEnviromentVariablesPlugin = require('inline-environment-variables-webpack-plugin');


var helpers = require('./helpers');
var path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),

  entry: {
    'app': './prod.app.ts'
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
    chunkFilename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },

      {
        test: /\.css$/,
        exclude: './app',
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader'
        })
      },
      {
        test: /\.css$/,
        include: './app',
        loaders: ['to-string-loader', 'css-loader']
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app']
    }),

    new InlineEnviromentVariablesPlugin('NODE_ENV'),

    // new HtmlWebpackPlugin({
    //   template: './../index.html'
    // }),
	new ExtractTextPlugin('[name].css')
  ],

  devtool: 'inline-source-map'
};