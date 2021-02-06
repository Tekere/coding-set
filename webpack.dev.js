// 開発用 設定
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

// ローカルサーバーで使うため必要
const path = require("path");

module.exports = merge(commonConfig, {
  mode: "development",
  // ソースマップの出力
  devtool: "inline-source-map",
  // watch: true,
  // HMR付きローカルサーバーの起動
  devServer: {
    open: true,
    contentBase: path.resolve(__dirname, "public"),
  },
});
