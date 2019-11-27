const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

  entry:'./src/index.js',

  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(s*)css$/,
        use: [MiniCssExtractPlugin.loader,'css-loader','postcss-loader','sass-loader']
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: ['html-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 20000,
              name: '[name].[contenthash].[ext]',
              outputPath: './assets/images/',
              publicPath: './assets/images/'
            }
          },
          'image-webpack-loader'
        ]
      }
    ]
  },

  plugins: [
  	new HtmlWebpackPlugin({
  		inject: true,
  		template: './src/html/kusbox.html',
  		filename:'kusbox.html'
  	}),
    new MiniCssExtractPlugin({
    	filename:'kusbox.css'
    }),
  ],

  optimization: {
    minimizer: [
    	new UglifyJsPlugin()
    ],
  },

  mode: 'development'
};