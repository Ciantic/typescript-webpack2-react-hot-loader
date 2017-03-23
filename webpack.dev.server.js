var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.dev.config');

// Fix for Windows and path
// https://github.com/webpack/webpack/issues/2362#issuecomment-266288636
var WarnCaseSensitiveModulesPlugin = require('webpack/lib/WarnCaseSensitiveModulesPlugin');
WarnCaseSensitiveModulesPlugin.prototype.apply = function () {};

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
    hot: true,
    // display no info to console (only warnings and errors)
    noInfo: false,
    contentBase: "src/",
    publicPath: config.output.publicPath,
    stats: {
        // With console colors
        colors: true,
        // add the hash of the compilation
        hash: false,
        // add webpack version information
        version: false,
        // add timing information
        timings: true,
        // add assets information
        assets: false,
        // add chunk information
        chunks: false,
        // add built modules information to chunk information
        chunkModules: false,
        // add built modules information
        modules: false,
        // add also information about cached (not built) modules
        cached: false,
        // add information about the reasons why modules are included
        reasons: false,
        // add the source code of modules
        source: false,
        // add details to errors (like resolving log)
        errorDetails: true,
        // add the origins of chunks and chunk merging info
        chunkOrigins: false,
        // Add messages from child loaders
        children: false
    }
});

server.listen(6002, 'localhost', function(err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log("Listening at http://localhost:6002. Please wait, I'm building things for you...");
});