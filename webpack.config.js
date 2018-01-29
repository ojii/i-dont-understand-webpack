const path = require('path');

const p = (...parts) => path.resolve(__dirname, ...parts);

module.exports = {
  entry: [p('index.js')],
  output: {
    filename: 'bundle.js',
    path: p()
  },
  target: 'web',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
