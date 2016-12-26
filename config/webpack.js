/**
 * Created by Asus on 05.11.2016.
 */
var config = require('./main');
var webpack = require('webpack');
var webpackPluginHtml = require('html-webpack-plugin');
module.exports = {
    context: config.src,
    entry: {
        vendor: config.src + '/vendor.ts',
        app: config.src + '/app.ts'
    },
    resolve: {
        extensions: ['', '.js', '.ts', '.html']
    },
    module: {
        loaders: [
            { test: /\.(ts|tsx)$/, loaders: ['ts-loader'] },
            { test: /\.html$/, loaders: ['html-loader'] }
        ]
    },
    plugins: [
        new webpackPluginHtml({
            template: 'index.html'
        })
    ]
};
