const path = require("path");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    entry: {
        

    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
    },
    devtool: "eval-source-map",
    plugins: [
        new NodePolyfillPlugin(),
        new webpack.ProvidePlugin({
            net: "net",
        }),
    ],
    resolve: {
        fallback: {
            fs: false,
            path: false,
            crypto: false,
            stream: false,
            util: false,
            assert: false,
            net: false,
            tls: false,
            child_process: false,
        },
    },
};
