const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],
  module: {
    rules: [
      {
        test: [/\.(js|jsx)$/],
        exclude: /node_modules/,
        use: [
          "babel-loader"
        ]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },
  plugins: [
    new Dotenv()
  ]
};

// plugins: [
//   new HtmlWebpackPlugin({
//     template: DIST_DIR
//   }),
// ]