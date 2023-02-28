import "@/styles/custom-props.scss";

import type { AppProps } from "next/app";

import Head from "@/components/lib/Head";
import AppProvider from "@/providers/app";
import { NextPageWithLayout } from "@/types/next";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? (page => page);

  return (
    <AppProvider>
      <Head>
        <title>Next-kit</title>
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </AppProvider>
  );
};

export default App;
