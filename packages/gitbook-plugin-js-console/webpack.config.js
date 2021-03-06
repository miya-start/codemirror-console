const path = require("path");
module.exports = {
    entry: ["./src/index.js"],
    devtool: process.env.WEBPACK_DEVTOOL || "source-map",
    output: {
        path: path.join(__dirname, "assets"),
        filename: "console-ui.js"
    },
    module: {
        rules: [
            {
                test: /\.hbs$/,
                use: ["raw-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            cacheDirectory: true
                        }
                    }
                ]
            }
        ]
    }
};
