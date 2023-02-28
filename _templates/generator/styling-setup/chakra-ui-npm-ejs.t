---
inject: true
to: "<%= isChakraUi ? 'package.json' : null %>"
after: devDependencies
skip_if: "@chakra-ui/react"
---
    "@chakra-ui/react": "^2.5.0",
    "@chakra-ui/storybook-addon": "^4.0.16",
    "@emotion/react": "^11.10.5",
    "@emotion/styled": "^11.10.5",
    "framer-motion": "^9.0.2",