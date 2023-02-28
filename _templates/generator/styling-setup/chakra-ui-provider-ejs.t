---
to: "<%= isChakraUi ? 'src/providers/app.tsx' : null %>"
force: true
---
import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";

import { theme } from "@/lib/chakra-ui/theme";

type AppProviderProps = {
  children?: ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default AppProvider;
