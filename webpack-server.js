var config = require("./webpack.config.dev.js");
var webpack = require("webpack")
var compiler = webpack(config);
var webpackDevServer = require("webpack-dev-server")
var server = new webpackDevServer(compiler, {
    contentBase: "./",
    hot : true
});
server.listen(9000,function(err){
    if(err){
        console.log(err)
    }
    console.log("at port 9000")
});
