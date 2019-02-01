const merge = require('webpack-merge');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin'); //每次打包前自动清理下dist文件
const ExtractTextPlugin = require("extract-text-webpack-plugin"); //单独生成css文件

const commonConfig = require('./webpack.base.config.js');

const publicConfig = {
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader",
        }),
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['../dist/*.*']), //每次打包前自动清理下dist文件
    new UglifyJSPlugin(), //文件压缩
    new webpack.DefinePlugin({
      'process.env': require('../config/prod.env')
    }),
    // 打包单独生成css文件
    new ExtractTextPlugin({
      filename: '[name].[contenthash:5].css',
      allChunks: true,
    }),
  ],
};

module.exports = merge(commonConfig, publicConfig);