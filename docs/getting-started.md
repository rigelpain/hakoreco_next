# はじめに

## 利用方法

### GitHub テンプレートを使用する

1. リポジトリトップの`Use this template`ボタンから各個人アカウントにリポジトリを作成する
2. その後不要ディレクトリを削除する（`docs`は不要）

### Git クローンする

1. `git clone`を利用して、リポジトリをクローンする
2. その後不要ディレクトリを削除する（`.git`・`docs`は不要）
3. Git リポジトリ化するため、`git init`する

## 設計をする

デザインからドメイン（機能）の分け方、共有コンポーネントの抽出、それぞれのコンポーネントの型定義、グローバルステートの持ち方を決める。

機能の分け方に関しては、デザイナー・PM を通して決めましょう。

## npm script

| コマンド         | 内容                                     |
| ---------------- | ---------------------------------------- |
| `dev`            | Next.js 開発サーバーを起動               |
| `build`          | ビルド＋エクスポート                     |
| `start`          | サーバーを起動                           |
| `lint`           | リント＋ Typescript チェック             |
| `test`           | Vitest 実行                              |
| `test:run`       | No-watch で Vitest                       |
| `test:update`    | テストファイルをアップデート             |
| `test:ui`        | UI 環境で Vitest                         |
| `prettier`       | Prettier                                 |
| `prettier:check` | Prettier（チェックのみ／husky 用）       |
| `prettier:fix`   | Prettier（write 付き）                   |
| `stylelint`      | Stylelint                                |
| `stylelint:fix`  | Stylelint（fix 付き）                    |
| `new:page`       | 新しいページをジェネレート               |
| `new:component`  | 新しいコンポーネントをジェネレート       |
| `new:feature`    | 新しい機能用のディレクトリをジェネレート |
| `npm:outdated`   | node package のアップデートチェック      |
| `npm:update`     | node package のアップデート              |
