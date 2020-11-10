const Webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const dotenv = require("dotenv").config({
  path: path.join(__dirname, "/.env")
});
const pjson = require("./package.json");

process.traceDeprecation = true;

const cssLoaderName = "css-loader";

module.exports = (env = {}) => {
  const publicPath = env.APP_BASE_PATH || process.env.APP_BASE_PATH;
  dotenv.parsed.APP_BASE_PATH = publicPath;
  return {
    mode: "production",
    entry: ["./src/index.jsx"],
    resolve: {
      extensions: [".js", ".jsx", ".scss", ".json"]
    },
    output: {
      path: path.join(__dirname, "/build"),
      publicPath,
      chunkFilename: `chunk_[name]_${pjson.version}_[contenthash].js`,
      filename: `bundle_${pjson.version}_[contenthash].js`
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
                presets: ["@babel/preset-env", "@babel/react"]
              }
            }
          ]
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
                localIdentName: "[name]_[local]__[hash:base64:5]",
                sourceMap: true
              }
            }
          ]
        },
        {
          test: /\.module\.s(a|c)ss$/,
          loader: [
            "style-loader",
            {
              loader: cssLoaderName,
              options: {
                modules: true,
                localIdentName: "[name]_[local]__[hash:base64:5]",
                camelCase: true,
                sourceMap: true
              }
            },
            "resolve-url-loader",
            {
              loader: "sass-loader",
              options: {
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
    optimization: {
      minimizer: [new UglifyJsPlugin()],
      splitChunks: {
        cacheGroups: {
          styles: {
            name: "styles",
            test: /\.s(a|c)ss$/,
            chunks: "all",
            enforce: true
          }
        }
      }
    },
    plugins: [
      new Webpack.optimize.OccurrenceOrderPlugin(),
      new Webpack.DefinePlugin({
        "process.env": JSON.stringify(dotenv.parsed),
        "process.env.NODE_ENV": JSON.stringify("production")
      }),
      new UglifyJsPlugin({
        sourceMap: true,
        uglifyOptions: {
          inline: false
        }
      }),
      new MiniCssExtractPlugin({
        filename: `[name]_${pjson.version}_[contenthash].css`,
        chunkFilename: `[id]_${pjson.version}_[contenthash].css`
      }),
      new HtmlWebpackPlugin({
        favicon: "src/assets/favicon.ico",
        template: "src/assets/index.html",
        env: process.env
      })
    ]
  };
};
