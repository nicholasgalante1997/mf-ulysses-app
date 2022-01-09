const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = {
  output: {
    publicPath: "http://localhost:4004/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 4004,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-typescript", "@babel/preset-react"],
          },
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "mf_sidecar",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        // './Link': '../exposables/Link/index'
        './Mock': '../exposables/Mock/index'
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
        next: {
          singleton: true,
          requiredVersion: deps.next
        },
        "styled-components": {
          singleton: true,
          requiredVersion: deps["styled-components"]
        }
      },
    })
  ],
};
