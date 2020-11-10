const Webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OpenBrowserPlugin = require("@juexro/open-browser-webpack-plugin");
const dotenv = require("dotenv").config({
  path: path.join(__dirname, "/.env")
});

process.traceDeprecation = true;

const { PORT } = process.env;

const cssLoaderName = "css-loader";

module.exports = (env = {}) => {
  const publicPath = env.APP_BASE_PATH || process.env.APP_BASE_PATH;
  dotenv.parsed.APP_BASE_PATH = publicPath;
  return {
    mode: "development",
    entry: ["./src/index.jsx"],
    watchOptions: {
      ignored: ["node_modules"]
    },
    resolve: {
      extensions: [".js", ".jsx", ".scss", ".json"]
    },
    output: {
      path: path.join(__dirname, "/build"),
      publicPath,
      filename: "bundle.js"
    },
    devtool: "inline-source-map",
    devServer: {
      compress: true,
      clientLogLevel: "none",
      transportMode: "ws",
      port: PORT,
      contentBase: "./build",
      hot: true,
      publicPath,
      historyApiFallback: true
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env", "@babel/react"],
                cacheDirectory: true
              }
            },
            {
              loader: "eslint-loader"
            }
          ]
        },
        {
          test: /\.css$/,
          use: ["style-loader", cssLoaderName]
        },
        {
          test: /\.s(a|c)ss$/,
          exclude: /\.module.(s(a|c)ss)$/,
          loader: [
            MiniCssExtractPlugin.loader,
            cssLoaderName,
            "resolve-url-loader",
            {
              loader: "sass-loader",
              options: {
                modules: true,
                localIdentName: "[name]_[local]__[hash:base64:5]",
                sourceMap: true
              }
            }
          ]
        },
        {
          test: /\.(woff|eot|ttf|woff2)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "fonts/[name]_[contenthash].[ext]"
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new Webpack.DefinePlugin({
        "process.env": JSON.stringify(dotenv.parsed),
        "process.env.NODE_ENV": JSON.stringify("development")
      }),
      new HtmlWebpackPlugin({
        favicon: "src/assets/favicon.ico",
        template: "src/assets/index.html"
      }),
      new MiniCssExtractPlugin(),
      new Webpack.HotModuleReplacementPlugin(),
      new OpenBrowserPlugin({ url: `http://localhost:${PORT}` })
    ]
  };
};
