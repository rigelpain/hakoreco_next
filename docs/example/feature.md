# feature の実装例

**"イベント"** 機能を実装したいと考える。

イベント取得、リスト表示、データ整形などイベント機能に属しているものはこのディレクトリ内に格納される。

```sh
/features
┗ event/
  ┣ components/    # ドメイン内コンポーネント
     ┗ EventList/
  ┣ api/           # ドメイン内API
  ┣ hooks/         # ドメイン内カスタムフック
  ┣ types/         # ドメイン内型定義
  ┗ index.ts       # エントリーポイント
```

API やカスタムフックはあくまでドメインに属している機能であり、API やコンポーネントが同ドメイン内で参照されなくても構わない。

## エントリーポイント

エントリーポイントとして、`index.ts`を用意する。

`features/event`の子ディレクトリへの`import`は許容しないようにする。

以下のように必要なコンポーネント・カスタムフック・API などは都度エクスポートすること。

```ts
import EventList from "./components/EventList";
import { useEvent } from "./hooks/useEvent";

export { EventList, useEvent };
```
