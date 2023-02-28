import { Component, PropsWithChildren, ReactNode } from "react";

type Props = PropsWithChildren<{
  fallback: ReactNode;
}>;

type State = { error: null | Error; hasError: boolean };

/**
 * SuspenseをキャッチしてPromiseが解決できなければエラーコンポーネントを返す
 *
 * @param {ReactNode} fallback
 * @param {ReactNode} children
 *
 * @return Error | ReactNode
 */
class ErrorBoundary extends Component<Props, State> {
  state = { error: null, hasError: false };
  static getDerivedStateFromError(error: Error): State {
    return {
      error,
      hasError: true,
    };
  }
  render(): ReactNode {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export { ErrorBoundary };
