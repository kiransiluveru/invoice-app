var path = require("path")
var webpack = require("webpack")
module.exports = {
  mode: 'production',
  entry:[ "./src/index.js"],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.css$/,
        loaders: [require.resolve('style-loader'), require.resolve('css-loader')]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ],
    resolve: {
      extensions: ['', '.js', '.jsx'],
      modulesDirectories: [
        'node_modules'
      ],
      modules: ['node_modules']
  }
  },
  node: {
    fs: "empty"
}
}
