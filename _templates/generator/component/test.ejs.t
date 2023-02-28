---
to: "<%= useTest ? `src/${componentPath}/index.test.tsx` : null %>"
---
import { render } from "@testing-library/react";
import { expect, test } from "vitest";

import <%= componentName %> from "./";

test("<%= componentName %>", () => {
  const { container } = render(<<%= componentName %> />);

  expect(container).toMatchSnapshot();
});
