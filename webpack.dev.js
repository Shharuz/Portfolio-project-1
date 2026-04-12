const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        filename: '[name].js',
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "../style/[name].css",
        }),
    ],

    module: {

        rules: [{
                test: /\.(s*)css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
            
        ],
    },
    devServer: {
        /*static: {
            directory: path.join(__dirname, './public'),
        },*/
        port: 9000,
        open: true,
        devMiddleware: {
            writeToDisk: true,
        },
    },
});