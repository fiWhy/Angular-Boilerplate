/**
 * Created by Asus on 05.11.2016.
 */
var config = require('./main');
var webpack = require('webpack');
var webpackPluginHtml = require('html-webpack-plugin');
var loaders = require('./loaders');
module.exports = {
    context: config.src,
    resolve: {
        extensions: ['', '.js', '.ts', '.html']
    },
    module: {
        loaders: loaders
    },
    plugins: [
        new webpackPluginHtml({
            template: 'index.html'
        })
    ]
};
