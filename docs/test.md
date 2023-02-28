# テストに関して

テストは`Vitest`をインストールしてあるが、husky 上ではコメントアウトしてある。

```sh
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run lint
# npm run test:run
npm run prettier:check
npm run stylelint
```

テストを利用する場合は、上記コメントアウトを外すこと。
