# Astro Template

![node version](https://img.shields.io/badge/node-20.12.0-48C628.svg?style=flat-square) ![pnpm version](https://img.shields.io/badge/pnpm-9.6.0-2D7DBE.svg?style=flat-square) ![volta version](https://img.shields.io/badge/volta-1.0.8~-EDCF3A.svg?style=flat-square)

## 📝 要件

- [Volta](https://volta.sh/)がインストールされていること
- makeコマンドがインストールされていること
  - Mac: 標準でインストール済み
  - Windows: 標準ではインストールされていないため、適宜インストールしてください

## 🛠️ 環境構築

1. リポジトリをクローン

```sh
git clone -b astro https://github.com/keisuke3/static-html-template.git
```

2. 対象のディレクトリに移動

```sh
cd static-html-template
```

3. 以下のコマンドを実行

```sh
make init
```

4. [localhost:8000](http://localhost:8000)にアクセスし、ページが表示されることを確認

## 🧞 コマンド

コマンドはプロジェクトルートで実行してください。

| Command                  | Action                                   |
| :----------------------- | :--------------------------------------- |
| `pnpm install`           | 依存モジュールをインストール             |
| `pnpm run dev`           | `localhost:8000`で開発サーバーを立ち上げ |
| `pnpm run build`         | `./dist/`にビルドファイルを生成          |
| `pnpm run preview`       | ローカル環境でビルドファイルをプレビュー |
| `pnpm run lint:*`        | 各種Lint実行                             |
| `pnpm run format`        | Prettierによるフォーマット               |
| `pnpm run tsc`           | TypeScriptによる型チェック               |
| `pnpm run gen:component` | コンポーネントの雛形を作成               |
| `pnpm run storybook`     | Storybook立ち上げ                        |

## 🚀 ディレクトリ構造

```
.
├── src
  ├── pages
  ├── layouts
  ├── components
  │ ├── features
  │ └── ui
  ├── styles
  ├── types
  └── utils
```

| ディレクトリ名     | 説明                                       |
| ------------------ | ------------------------------------------ |
| pages              | ページを管理（ファイルベースルーティング） |
| layouts            | ページのレイアウトを管理                   |
| components/feature | ページ固有のコンポーネントを管理           |
| components/ui      | 汎用的なUIコンポーネントを管理             |
| styles             | グローバルなCSSを管理                      |
| types              | 型定義を管理                               |
| utils              | ユーティリティ関数を管理                   |
