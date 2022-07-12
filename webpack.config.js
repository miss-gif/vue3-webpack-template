// import
const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

// 내보내기 : JS -> export / node.js -> module.exports
module.exports = {
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: "./js/main.js", // 자바스크립트를 진입점으로 한다.
  // 결과물(번들)을 반환하는 설정
  output: {
    // path: path.resolve(__dirname, "dist"),
    // 절대경로 표기, resolve메소드 1, 2경로를 합쳐준다.
    // filename: "main.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
    ],
  },
  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: "./index.html",
    }),
    new CopyPlugin({
      patterns: [{ from: "static" }],
    }),
  ],
  devServer: {
    host: "localhost",
  },
};
