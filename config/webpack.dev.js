const path = require('path');
const EslintWebpackPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { getStyleLoaders } = require('./funcs/GetLoaders.js');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: undefined,
        filename: 'static/js/[name].js',
        chunkFilename: 'static/js/[name].chunk.js',
        assetModuleFilename: 'static/media/[hash:10][ext][query]',
    },
    module: {
        // 处理CSS
        rules: [
            {
                test: /\.css$/,
                use: getStyleLoaders(),
            },
            {
                test: /\.less$/,
                use: getStyleLoaders('less-loader'),
            },
            // 处理图片
            {
                test: /\.(jpe?g|png|gif|bmp|webp|svg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024,
                    }
                }
            },
            // 处理其他资源
            {
                test: /\.(woff2|ttf)$/,
                type: 'asset/resource',
            },
            // 处理js
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                include: path.resolve(__dirname, '../src'),
                options: {
                    cacheDirectory: true,
                    cacheCompression: false,
                }
            },
            // 处理ts
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                        },
                    },
                ],
            }
        ],
    },
    plugins: [
        new EslintWebpackPlugin({
            context: path.resolve(__dirname, '../src'),
            exclude: 'node_modules',
            cache: true,
            cacheLocation: path.resolve(__dirname, '../node_modules/.cache/.eslintcache')
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.htm'),
        }),
    ],
    mode: 'development',
    devtool: 'cheap-module-source-map',
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
        runtimeChunk: {
            name: entrypoint => `runtime~${entrypoint.name}.js`,
        }
    },
    devServer: {
        port: 4155,
        open: true,
        host: 'localhost',
        hot: true,
    },
    resolve: ['.jsx', '.json', '.js', '.tsx', '.ts', '.vue']
};