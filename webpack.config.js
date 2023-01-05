var HtmlWebpackPlugin= require('html-webpack-plugin');
const path = require('path');
const CleanWebpackPlugin= require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  plugins: [new HtmlWebpackPlugin({
    template:'./src/template.html'
  })]
,
  module:{
    rules:[
      {
        test:/\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
       },
       {
        test:/\.html$/,
        use:['html-loader'],
       }
      
    ],
  },
};