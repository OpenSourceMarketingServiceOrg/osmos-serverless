const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './handler.js',
  target: 'node',
  externals: {
    aws-sdk: "aws-sdk",
    babel-runtime: "babel-runtime"
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      include: __dirname,
    }],
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: './handler.js'
  },
};
