/**
 * Created by Asus on 05.11.2016.
 */
var config = require('./main');
var webpackConfig = require('./webpack');
var merge = require('webpack-merge');

module.exports = merge(webpackConfig, {
    entry: {
        vendor: config.src + '/vendor.ts',
        app: config.src + '/app.ts'
    },
    
    output: {
        path: config.dist,
        filename: '[name].bundle.js'
    },

    devServer: {
        contentBase: config.src,
        colors: true,
        historyApiFallback: true
    }
});