var http = require('http');
var express = require('express');
var webpack = require('webpack');
var historyApiFallback = require('connect-history-api-fallback')

var webpackConfig = require('./../webpack.config');

var compiler = webpack(webpackConfig);

var app = express();

app.use(historyApiFallback({
  verbose: false
}));

app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true
  },
  lazy: false,
  watchOptions: {
    aggregateTimeout: 300,
    poll: true
  }
}));

app.use(require("webpack-hot-middleware")(compiler));

var server = http.createServer(app);
server.listen(process.env.PORT || 7000, function() {
  console.log("Listening on %j", server.address().port);
});
