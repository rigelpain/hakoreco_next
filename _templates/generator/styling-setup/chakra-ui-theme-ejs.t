---
to: "<%= isChakraUi ? 'src/lib/chakra-ui/theme.ts' : null %>"
unless_exists: true
---
import { extendTheme } from "@chakra-ui/react";

import { toDesktop, toTablet } from "@/styles/break-points";

const breakpoints = {
  tablet: `${toTablet}px`,
  desktop: `${toDesktop}px`,
};

export const theme = extendTheme({ breakpoints });
