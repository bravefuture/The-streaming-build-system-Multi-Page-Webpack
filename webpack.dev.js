const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./config.js');

const plugins = [];
config.dev.html.forEach((v) => {
    plugins.push(new HtmlWebpackPlugin(v));
});

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: 'dist'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            }]
        }]
    },
    plugins: plugins
});