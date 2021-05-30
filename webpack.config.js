const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const indextInput = './src/index.html';
const indexOutput = 'index.html';

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }, 
  plugins: [
      new HTMLWebpackPlugin({
          filename: indexOutput, 
          template: indextInput,
      })
  ]
};
