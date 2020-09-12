const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    // entry: ["./src/js/index.js"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/bundle.js",
    },
    mode: "production",
    // devtool: "inline-source-map",
    // devServer: {
    //     contentBase: "./dist",
    // },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./index.html",
            inject: false
        }),
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
            },
        }, ],
    },
};