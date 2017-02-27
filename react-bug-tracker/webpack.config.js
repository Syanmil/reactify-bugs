module.exports = {
  entry: './src/main.js',
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public',
    publicPath: '/'
  },
  module : {
    rules : [
      {
        test : /\.jsx?$/,
        loader : 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  }
};
