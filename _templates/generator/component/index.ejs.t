---
to: src/<%= componentPath %>/index.tsx
---
import { FC } from "react";

import { WithCommonProps } from "@/types/common-props";

type <%= componentName %>Props = WithCommonProps;

const <%= componentName %>: FC<<%= componentName %>Props> = (props) => {
  const { children, ...attr } = props;

  return (
    <div {...attr}>{children}</div>
  );
};

export default <%= componentName %>;