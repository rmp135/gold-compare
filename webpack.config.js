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
  }
}
