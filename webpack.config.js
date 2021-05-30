const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const indextInput = './src/index.html';
const indexOutput = 'index.html';

module.exports = {

  entry: './src/app/app.module.js',

  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {

    rules: [

      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel-loader" 
      },

      {
        test: /\.html$/,
        use: 'raw-loader'
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }

    ]

  },

  devServer: { 
    contentBase: path.join(__dirname, "src"), 
    compress: true, 
    port: 9000, 
    publicPath: "/dist/"
  },

  plugins: [
      new HTMLWebpackPlugin({
          filename: indexOutput, 
          template: indextInput,
      })
  ]

}
