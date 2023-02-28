---
inject: true
to: "<%= isTailwindCss ? '.storybook/main.js' : null %>"
before: webpackFinal
skip_if: addons
---
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "storycap", "storybook-addon-next-router"],
