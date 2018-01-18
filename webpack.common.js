const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        index: './src/js/index.js',
        detail: './src/js/detail.js',
        // 提取第三方库
        vendor: [
            './src/js/lib/jquery-3.2.1.min.js'
        ]
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist/js')
    },
    module: {
        rules: [{
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                exclude: /node_modules/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: path.posix.join('../', 'images/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'],
                        cacheDirectory: true
                    }
                }
            }
        ]
    }
};