# レイアウトコンポーネントの例

レイアウトコンポーネントは、必要なコンポーネントを内包した`children`を含めた React コンポーネント。

```tsx
import { ReactNode } from "react";

type DefaultLayoutProps = {
  children?: ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      {/* 必要なコンポーネントをインポートしておく */}
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
```

## レイアウトの使用方法

```tsx
import { ReactElement } from "react";

import DefaultLayout from "@/components/layouts/DefaultLayout";
import { NextPageWithLayout } from "@/types/next";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <h1>Hello World.</h1>
    </>
  );
};

Home.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Home;
```
