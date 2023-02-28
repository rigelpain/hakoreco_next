import { ReactNode } from "react";

type DefaultLayoutProps = {
  children?: ReactNode;
};

/**
 * デフォルトのレイアウト
 * HeaderやFooterを入れる
 */
const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return <>{children}</>;
};

export default DefaultLayout;
