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
git clone -b no-build-html https://github.com/keisuke3/static-html-template.git
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

| Command             | Action                                   |
| :------------------ | :--------------------------------------- |
| `pnpm install`      | 依存モジュールをインストール             |
| `pnpm run dev`      | `localhost:8000`で開発サーバーを立ち上げ |
| `pnpm run lint:*`   | 各種Lint実行                             |
| `pnpm run format`   | Prettierによるフォーマット               |
| `pnpm run gen:page` | ページの雛形を作成                       |

## 🚀 ディレクトリ構造

```
.
├── src
  ├── index.html
  ├── index.css
  ├── index.js
  ├── public
  └── styles
```

| ディレクトリ名 | 説明                       |
| -------------- | -------------------------- |
| index.html     | トップページのHTMLファイル |
| index.css      | トップページのCSSファイル  |
| index.js       | トップページのJSファイル   |
| public         | 画像格納用ディレクトリ     |
| styles         | グローバルなCSSを管理      |
