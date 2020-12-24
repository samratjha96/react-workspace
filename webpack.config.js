const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
        {
            test: /\.(js|jsx|mjs)$/,
            exclude: /(node_modules)/,
            loader: require.resolve('babel-loader'),
            options: {
              compact: true
            }
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
    ]
}
}
