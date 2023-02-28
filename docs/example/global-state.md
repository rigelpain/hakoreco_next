# 状態管理（グローバルステート）の例

SWR を用いて、グローバルステート化するためのカスタムフックを用意している（`src/hooks/useCreateSharedState.ts`）。

`useCreateSharedState`を利用してストアを作成する。

```tsx
import { useCreateSharedState } from "@/hooks/useCreateSharedState";

const initialData = 0;

const useCounterStore = () => {
  const { data, mutate } = useCreateSharedState("@app/counter", initialData);

  return {
    data: data || initialData,
    mutate,
  };
};

export { useCounterStore };
```

このストアを使用する`Counter`コンポーネントを作成する。

```tsx
import { FC } from "react";

import { useCounterStore } from "@/stores/useCounterStore";
import { WithCommonProps } from "@/types/common-props";

type CounterProps = WithCommonProps;

const Counter: FC<CounterProps> = () => {
  const { data: count, mutate: setCount } = useCounterStore();

  const onClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <button type="button" onClick={onClick}>
        Counter: {count}
      </button>
    </>
  );
};

export default Counter;
```
