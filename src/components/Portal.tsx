import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";

type PortalProps = {
  children?: ReactNode;
};

/**
 * アプリルートにDOMを配置するReactポータル
 *
 * @param {ReactNode} children
 *
 * @returns createPortal
 */
const Portal: FC<PortalProps> = ({ children }) => {
  const rootElement = document.getElementById("__next");

  if (!rootElement) {
    return <>{children}</>;
  }

  return createPortal(children, rootElement);
};

export { Portal };
