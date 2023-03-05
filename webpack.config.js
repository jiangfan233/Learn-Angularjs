
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
            alias: {
                "@": path.resolve(__dirname, 'src/'),
            },
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
                    // exclude: /node_modules/,
                    include: path.resolve(__dirname, 'src'),
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
                                    // 不执行类型检查
                                    // ["@babel/preset-typescript"]
                                ],
                                plugins: ['@babel/plugin-transform-runtime'],
                            }
                        },
                        {
                            // relies on your tsconfig.json configuration. 
                            // Make sure to avoid setting module to "CommonJS", 
                            // or webpack won't be able to tree-shake your code.
                            loader: "ts-loader",
                        }
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