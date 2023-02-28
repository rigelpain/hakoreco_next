import { ReactNode } from "react";

type CommonProps = {
  id?: string;
  className?: string;
  children?: ReactNode;
};

type WithCommonProps<P = object> = P & CommonProps;

export type { CommonProps, WithCommonProps };
