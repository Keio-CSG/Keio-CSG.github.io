# Keio Computing and Sensing Group

慶應義塾大学 吉岡研究室の日本語・英語サイト。Astroによる静的サイトです。

## 開発

Node.js 22.12以上が必要です。

```sh
npm ci
npm run dev -- --background
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
npm run build
```

プレビュー: http://localhost:4321/lab-hp/ja （英語: `/lab-hp/en`）

Google Driveの仮想ドライブでnpmの書き込みエラーが出る場合は、同期対象外のローカルフォルダにソースと設定ファイルをコピーし、そのフォルダで `npm ci` と上記コマンドを実行してください。壊れた `node_modules` はコピーしないでください。

## コンテンツの更新

- `src/data/research.ts`: 研究分野
- `src/data/projects.ts`: プロジェクト
- `src/data/publications.ts`: 論文（タイトル・著者・学会名検索、年別フィルター）
- `src/data/news.ts`: ニュース（新しいものを先頭に追加）
- `src/data/members.ts`: メンバー
- `src/data/recruit.ts`: 研究室紹介・募集情報
- `src/data/site.ts`: 所属・住所・連絡先

ホームと各詳細ページは日英共通のテンプレートから生成します。既存データ内の外部リンクがサービスのトップページのみの場合、論文リンクとしては表示しません。正しい論文・プロジェクトのURLがわかったらデータを更新してください。

## デザイン

共通スタイルは `src/styles/global.css`。元サイトの白・薄いグレー・青（`#226e93`）をベースにしています。`figs/main.webp` をトップと研究紹介、`figs/edge.webp` をエッジコンピューティング紹介、`figs/health.webp` のマスコットをヘッダー・研究紹介・参加案内に使用しています。英字は元サイトと同じLato、日本語はNoto Sans JPを使用します。フォントはGoogle Fontsから読み込み、オフラインではシステムフォントにフォールバックします。

公開URLを変更する場合は `astro.config.mjs` の `site` と `base` を更新してください。
