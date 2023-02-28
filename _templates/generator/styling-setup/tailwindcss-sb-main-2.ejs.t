---
inject: true
to: "<%= isTailwindCss ? '.storybook/main.js' : null %>"
before: sass-loader
skip_if: postcss-loader
---
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [require("tailwindcss"), require("autoprefixer")],
            },
          },
        },