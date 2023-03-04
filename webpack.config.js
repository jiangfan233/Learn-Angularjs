
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require("path");

module.exports = function () {
    // 获取当前的环境信息
    // console.log(rest)
    return {
        entry: {
            app: "./src/app/app.module.js",
        },

        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[contenthash].js',
            clean: true
        },

        resolve: {
            extensions: [".ts", '.js', '.html',],
        },

        devServer: {
            static: {
                directory: path.join(__dirname, 'public'),
            },
            compress: true,
            port: 9000,
        },

        plugins: [
            new HtmlWebpackPlugin({
                filename: "index.html",
                template: "./index.html"
            }),
        ],

        module: {
            rules: [
                {
                    test: /\.(ts|js)$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    [
                                        '@babel/preset-env',
                                        {
                                            targets: { ie: "8" }
                                        }
                                    ],
                                    ["@babel/preset-typescript"]
                                ],
                                plugins: ['@babel/plugin-transform-runtime'],
                            }
                        },
                    ]
                },

                // 不可删，解析html文件
                {
                    test: /\.html$/i,
                    loader: "html-loader",
                },
            ],
        },
    }

};