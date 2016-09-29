var webpack = require('webpack');

var plugins = []

if (process.env.NODE_ENV === "production") {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings:false
      }
    })
  );
};

module.exports = {
  entry: './src/bootstrap.js',
  output: {
    path:'./app',
    filename: 'app.js',
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(?:jpg|gif|png)$/,
        loader: 'file'
      }
    ]
  },
  plugins
}
