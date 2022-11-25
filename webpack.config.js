const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: path.join(__dirname, "build"),
    // 打包成system支持的模块
    libraryTarget: "system"
  },
  devtool: "source-map",
  devServer: {
    port: 9000,
    // 静态资源文件夹
    contentBase: path.join(__dirname, "build"),
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        // 以js结尾
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  },
  plugins: [
    //   生成 html文件
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      // 不要引入打包后的 js 文件
      inject: false
    })
  ],
  // 哪些模块不需要被打包，微应用中需要使用公共的插件
  externals: ["react", "react-dom", "react-router-dom"]
}
