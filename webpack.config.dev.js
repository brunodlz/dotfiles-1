var path = require('path');
var webpack = require('webpack');

module.exports = {
  cache: true,
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './modules/index.js'
  ],
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'app.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [ {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      include: path.resolve(__dirname, 'modules')
    }, {
      test: /\.json?$/,
      loader: 'json-loader'
    } ]
  }
}
