const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "eval-source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js", 
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/, 
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.pug$/,
        loader: "pug-loader",
        options: {
          pretty: true,
        },
      },
      {
        test: /\.svg$/,
        loader: "svg-sprite-loader",
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.pug",
    }),
  ],
};
