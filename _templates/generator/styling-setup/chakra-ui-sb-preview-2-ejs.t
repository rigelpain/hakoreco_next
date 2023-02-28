---
inject: true
to: "<%= isChakraUi ? '.storybook/preview.ts' : null %>"
at_line: 82
skip_if: "chakra: {"
---
  chakra: {
    theme,
  },