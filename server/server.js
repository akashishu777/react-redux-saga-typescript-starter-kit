// var koa = require('koa');
// var app = koa();

// const port = process.env.PORT || 3000;
 
// var webpack = require('webpack')
// var webpackConfig = require('./../webpack.config');
// var compiler = webpack(webpackConfig);
// // app.use(require('koa-webpack-dev')({
// //     config: './webpack.config.js'
// // }));
// app.use(require("webpack-dev-middleware")(compiler, {
//   noInfo: true, publicPath: webpackConfig.output.publicPath
// }));

// app.use(require("koa-webpack-hot-middleware")(compiler));
 
// app.listen(port);


var http = require('http');
var express = require('express');
var webpack = require('webpack');

var webpackConfig = require('./../webpack.config');

var compiler = webpack(webpackConfig);

var app = express();

app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true
  }
}));

app.use(require("webpack-hot-middleware")(compiler));

var server = http.createServer(app);
server.listen(process.env.PORT || 3000, function() {
  console.log("Listening on %j", server.address().port);
});
