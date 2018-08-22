const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    main: "./src/js/main.js",
    a: "./src/js/a.js",
    b: "./src/js/b.js",
    c: "./src/js/c.js",
  },
  output: {
    path: __dirname + "/dist",
    filename: "./js/[name]-[chunkhash].js",
    publicPath:'https://cdn.com'
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./index.html",
      filename:'a.html',
      inject:'body',
      title:'a.html',
      chunks:['main','a']
    }),
    new htmlWebpackPlugin({
      template: "./index.html",
      filename:'b.html',
      inject:'body',
      title:'b.html',
      chunks:['b']
    }),
    new htmlWebpackPlugin({
      template: "./index.html",
      filename:'c.html',
      inject:'body',
      title:'c.html',
      chunks:['c']
    }),
  ]
};
