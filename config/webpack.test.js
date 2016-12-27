/**
 * Created by Asus on 05.11.2016.
 */
var config = require('./main');
var loaders = require('./loaders');
module.exports = {
    devtool: 'inline-source-map',
    module: {
        loaders: loaders,
        postLoaders: [
            {
                test: /\.ts$/,
                exclude: [
                    'node_modules',
                    /\.spec\.ts$/
                ],
                loader: 'istanbul-instrumenter'
            }
        ]
    }
};