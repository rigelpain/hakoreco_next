import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type { NextPageWithLayout };
