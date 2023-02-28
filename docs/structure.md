# ディレクトリ構造

bulletproof-react を参考

```sh
/root
┣ _templates/                    # Hygen
┣ .husky/                        # husky
┣ .storybook/                    # Storybook
┣ docs/                          # ドキュメント
┣ public/                        # 静的ファイル
┗ src/
  ┣ components/                  # 共有コンポーネント
     ┣ elements/                 # 最小単位のコンポーネント。Buttonなど（HTMLエレメント一つで表現できる単位を推奨）
     ┣ layouts/                  # レイアウトコンポーネント
     ┣ lib/                      # ライブラリやフレームワークのラッパーコンポーネント
     ┗ ui/                       # Atomic designのatomより大きいもの対象。共有コンポーネントなので大きいくても"生体"ぐらいが限度
  ┣ features/                    # 機能毎に分割する。Headerなどもここでいいかも
  ┣ hooks/                       # 共有カスタムフック
  ┣ lib/                         # ライブラリの設定ファイルなど
  ┣ pages/                       # Next.jsのページ
  ┣ stores/                      # 共有ステート
  ┣ styles/                      # 共有スタイル
  ┣ types/                       # 共有型定義
  ┗ utils/                       # 共有メソッド
```

## 配置例

```sh
/root
┗ src/
  ┣ components/
     ┣ elements/
        ┗ Button/                # ボタンコンポーネント
     ┣ ui/
        ┗ Card/                  # カードコンポーネント
     ┣ layouts/
        ┣ Header/                # ヘッダー
        ┣ Footer/                # フッター
        ┗ DefaultLayout.tsx      # Next.js getLayout用レイアウト
     ┣ lib/
        ┣ Head.tsx               # next/headのラッパーコンポーネント
        ┗ Link.tsx               # next/linkのラッパーコンポーネント
     ┣ ErrorBoundary.tsx         # Suspense用ErrorBoundary
     ┗ Portal.tsx                # React Portal
  ┗ features/
     ┗ event/                    # イベント
        ┣ index.ts
        ┣ components/
        ┗ hooks/
```

`features`のディレクトリは`index.ts`からのみインポートできるようにする

> Everything from a feature should be exported from the index.ts file which behaves as the public API of the feature.
>
> -- <cite>[bulletproof-react](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md)</cite>
