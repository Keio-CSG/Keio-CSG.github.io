# Keio CSG Website

慶應義塾大学 理工学部 吉岡研究室（Computing and Sensing Group）のウェブサイトです。

**https://keio-csg.github.io/**

Website of the Computing and Sensing Group (Yoshioka Lab), Faculty of Science and Technology, Keio University.

## 開発

[Astro](https://astro.build/) と Tailwind CSS で作った静的サイトです。Node.js 22.12 以上で動きます。

```sh
npm install
npm run dev      # 開発サーバー
npm run build    # dist/ に静的ビルド
npm run preview  # ビルド結果の確認
```

`main` に push すると GitHub Actions が GitHub Pages に自動でデプロイします。

## 内容の更新

ページの本文はほぼすべて `src/data/` と `src/content/` のデータから生成されます。
多くの更新はテンプレートに触れずにできます。

| 更新したいもの | 編集する場所 |
|---|---|
| ニュース | `src/data/news.ts`（配列の先頭に追加） |
| 論文・受賞・研究費 | `src/data/publications.ts` |
| プロジェクト | `src/content/projects/` に `.md` を追加 |
| メンバー | `src/data/members.ts`（写真は `src/assets/members/` と `src/data/photos.ts`） |
| 研究テーマ | `src/data/research.ts` |
| 説明会・配属案内 | `src/data/recruit.ts`、`src/data/highlights.ts` |
| ナビゲーションなどの UI 文言 | `src/i18n/strings.ts` |

サイトは日本語（`/ja/`）と英語（`/en/`）の2言語です。文言を追加するときは `ja` と `en` の両方を書いてください。

変更後は `npm run build` が通ることを確認してください。
