const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack')

const commonConfig = require('./webpack.base.config.js');

// const env = process.env.NODE_ENV === 'development' ? require('../config/dev.env') : require('../config/prod.env');
// console.log(JSON.stringify(process.env) + '------------------------');
// console.log(JSON.stringify(env) + '------------------------');

const devConfig = {
  devtool: 'inline-source-map',
  entry: {
    app: [
      'react-hot-loader/patch',
      path.join(__dirname, '../src/main.js'),
    ],
  },
  output: {
    filename: '[name].[hash].js',
  },
  devServer: {
    port: 8080,
    contentBase: path.join(__dirname, '../dist'),
    historyApiFallback: true,
    host: 'localhost',
    hot: true //热替换
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
  ]
};

module.exports = merge({
  customizeArray(a, b, key) {
      /*entry.app不合并，全替换*/
      if (key === 'entry.app') {
          return b;
      }
      return undefined;
  }
})(commonConfig, devConfig);