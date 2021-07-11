const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js", //Точка входа откуда берутся все файлы
  devtool: "eval-source-map", //Инструменты для разрабочика, отладки кода
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js", //имя файла сборки
  },
  module: {
    rules: [
      {
        test: /\.m?js$/, //Влияет на то файл какого расширения мы возьмем
        exclude: /(node_modules|bower_components)/, // Файлы которые не включать в конвертацию
        use: {
          //Указывает вебпаку какой лоудер использовать для данных типов файлов
          loader: "babel-loader",
          options: {
            //дополнительные настройки
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
