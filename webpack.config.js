const path = require('path');

module.exports = {
  entry: './jquery-mockup/src/navigation.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'jquery-mockup/dist')
  },
  module: {
    rules: [{
        test: /\.scss$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "sass-loader" // compiles Sass to CSS
        }]
    }]
}
};