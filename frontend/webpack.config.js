const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const browserConfig = {
    entry: ['@babel/polyfill', './components/browser/index.js'],
    output: {
        path: path.resolve(__dirname, 'public/javascripts'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devtool: 'source-map',
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' }
        ]
    },
    mode: 'development',
    plugins: [
        new webpack.DefinePlugin({
            __isBrowser__: "true"
        })
    ],
    node: {
        __dirname: false
    }
};

const serverConfig = {
    entry: './server.js',
    target: 'node',
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.js',
        publicPath: '/'
    },
    mode: 'development',
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            __isBrowser__: "false"
        }),
        new NodemonPlugin({
            // If using more than one entry, you can specify
            // which output file will be restarted.
            script: './dist/server.js',
            // Detailed log.
            verbose: true,
        })
    ],
    node: {
        __dirname: false
    }
};

const styleConfig = {
    entry: './components/style/indexStyleLoader.js',
    output: {
        path: path.resolve(__dirname, 'public/stylesheets'),
        filename: 'main.css',
        // publicPath: '/'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        // options: {
                        //     publicPath: path.resolve(__dirname, 'public/stylesheets')
                        // },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('tailwindcss'),
                                require('autoprefixer')
                            ]
                        }
                    }
                ]
            }
        ]
    },
    mode: 'development',
    plugins: [
        new MiniCssExtractPlugin(),
    ]
}

module.exports = [styleConfig, browserConfig, serverConfig]
// module.exports = [browserConfig, serverConfig]