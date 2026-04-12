const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = merge(common, {
    mode: 'production',

    plugins: [
        new MiniCssExtractPlugin({
            filename: "../style/[name].[contenthash].css",
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
    output: {
        filename: '[name].[contenthash].js',
    },

});