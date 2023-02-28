import NextHead from "next/head";
import { FC, ReactNode } from "react";

type HeadProps = {
  children: ReactNode;
};

/**
 * Next.jsのHeadコンポーネントのラッパーコンポーネント
 */
const Head: FC<HeadProps> = ({ children }) => {
  return <NextHead>{children}</NextHead>;
};

export default Head;
