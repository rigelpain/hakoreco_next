const { resolve } = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  staticDirs: ["../public"],
  features: {
    emotionAlias: false,
  },
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "storycap", "storybook-addon-next-router"],
  webpackFinal: config => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            modules: {
              auto: true,
            },
            url: {
              filter: url => {
                if (/^\//.test(url)) {
                  return false;
                }
                return true;
              },
            },
          },
        },
        "sass-loader",
      ],
      include: resolve(__dirname, "../src"),
    });

    config.resolve.alias = {
      ...config.resolve.alias,
      "@": resolve(__dirname, "../src"),
    };

    config.module.rules.push({
      test: /\.inline.svg$/,
      issuer: /\.[jt]sx$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgo: false,
          },
        },
      ],
      exclude: /node_modules/,
    });
    const fileLoaderRule = config.module.rules.find(rule => rule.test && rule.test.test(".svg"));
    fileLoaderRule.exclude = /\.inline.svg$/;

    return config;
  },
};
