const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin('../css/[name][chunkhash].css');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./config.js');

const plugins = [
    new CleanWebpackPlugin(['dist']),
    extractSass,
    new UglifyJSPlugin(),
    // 指定环境
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.HashedModuleIdsPlugin(),
    // 防止重复、缓存
    new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest'],
        minChunks: Infinity
    })
];
config.prod.html.forEach((v) => {
    plugins.push(new HtmlWebpackPlugin(v));
});

module.exports = merge(common, {
    module: {
        rules: [{
            test: /\.scss$/,
            exclude: /node_modules/,
            use: extractSass.extract({
                use: [{
                    loader: 'css-loader',
                    options: {
                        minimize: true
                    }
                }, {
                    loader: 'sass-loader'
                }],
                fallback: 'style-loader'
            })
        }]
    },
    plugins: plugins
});