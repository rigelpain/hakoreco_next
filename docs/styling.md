# スタイリング

~~基本スタイリングは CSS Modules を使用する。~~

CSS Modules、Chakra UI、tailwindcss の 3 つから選ぶ形にしました。

テンプレート構築後、hygen スクリプトを起動します。

```bash
npx hygen generator styling-setup
```

手法を選択すると、必要な記述がそれぞれの場所に記載（インジェクション）される。

Chakra UI と tailwindcss は`package.json`を更新するので、再度`npm install`が必要になります。

## Chakra UI

基本的に Flex・Grid などを用いてレイアウトを作成するときや、画像など`atoms`レベルのコンポーネントを使用したい時に使用する。

※ライブラリのコンポーネントを使用する場合は、ラッパーコンポーネントを用意すること。

### ブレイクポイントの拡張

```ts
const breakpoints = {
  tablet: "600px",
  desktop: "1024px",
};
```

`src/lib/chakra-ui/theme.ts`でブレイクポイントを拡張している。

```jsx
<Box fontSize={{ base: "12px", tablet: "16px" }}></Box>
```

のように使用すること。

## SCSS

CSS Modules は`.scss`で読み込みを行っているので、SCSS 記法が使用できる。

### メディアクエリ（Mixin）

```scss
@include mq() {
}
@include mq(tablet) {
}
```

のような形で使用できる。

`min-width`の状態でコンパイルされるので、モバイル → タブレット → デスクトップと上書きを行なっていく。
