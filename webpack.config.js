const webpack = require('webpack');
module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname,
    filename: "./public/bundle.js"
  },
  resolve: {
    extensions:[".js",".jsx"]
  },
  module: {
    loaders: [
      {
        loader:"babel-loader",
        query: {
          presets :["react","es2015"]
        },
        test: /\.jsx?$/,
        exclude: /(node_modules)/
      }
    ]
  }
}
