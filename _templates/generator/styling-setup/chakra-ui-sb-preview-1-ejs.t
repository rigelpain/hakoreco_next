---
inject: true
to: "<%= isChakraUi ? '.storybook/preview.ts' : null %>"
at_line: 4
skip_if: ../src/lib/chakra-ui/theme
---
import { theme } from "../src/lib/chakra-ui/theme";