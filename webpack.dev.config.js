var path = require("path");
var packageJson = require(path.join(__dirname, 'package.json'));
var webpack = require('webpack');

var appDir = path.resolve(__dirname, "src");
var config = {
    entry: {
        vendors: [
            // For react hot loader
            'react-hot-loader/patch',
        ].concat(Object.keys(packageJson.dependencies)),
        app: [
            // For react hot loader
            'react-hot-loader/patch',
            // For module replacement
            'webpack-dev-server/client?http://localhost:6002',
            'webpack/hot/only-dev-server',
            path.join(__dirname, 'src', 'Index.tsx')
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: '[name].js',
        publicPath: "http://localhost:6002/assets/"
    },
    watch: true,
    module: {
        loaders: [
            { test: /\.tsx?$/, loaders: ['ts-loader'], include: appDir },
        ]
    },
    devtool: 'inline-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = config;
