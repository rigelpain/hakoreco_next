---
inject: true
to: "<%= isChakraUi ? '.storybook/main.js' : null %>"
before: webpackFinal
skip_if: "@chakra-ui/react"
---
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storycap",
    "storybook-addon-next-router",
    "@chakra-ui/storybook-addon",
  ],
  refs: {
    "@chakra-ui/react": {
      disable: true,
    },
  },