const webpack = require("@nativescript/webpack");

module.exports = (env) => {
  webpack.init(env);

  webpack.chainWebpack((config) => {
    config.resolve.merge({
      fallback: {
        "url": require.resolve("url/"),
        "util": require.resolve("util/")
      }
    });
  });

  return webpack.resolveConfig();
};
