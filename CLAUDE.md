# Keio CSG — Lab Website

慶應義塾大学 理工学部 吉岡研究室 (Computing and Sensing Group) の研究室サイト。
旧 Google Sites 版 (https://sites.google.com/keio.jp/keio-csg/) の内容を保持しつつ刷新したもの。

- 公開URL: **https://keio-csg.github.io/**
- リポジトリ: https://github.com/Keio-CSG/Keio-CSG.github.io（組織サイト用の特別名。この名前だからルート直下で配信される）
- 作業ディレクトリ: `C:\Users\kyosh\OneDrive\Documents\Codes\lab-hp`

---

## ⚠️ 最初に読むこと

**このプロジェクトをクラウド同期フォルダ (Google Drive の `G:\マイドライブ\...`) に置かないこと。**
Drive 上では `npm install` が `TAR_ENTRY_ERROR` を多発して壊れ、`astro` が終了コード0のまま
無言で何もせず終わる（`dist/` が生成されない）という分かりにくい壊れ方をする。
OneDrive 上の現在地では問題なく動く。原本のイラストだけ Drive の `figs/` にも残っている。

---

## Commands

```
npm install
npm run dev      # dev サーバー。Astro 7 は自動でバックグラウンド化する
npm run build    # 静的ビルド → dist/
npm run preview  # ビルド結果のプレビュー

npx astro dev status    # バックグラウンド dev サーバーの状態
npx astro dev stop      # 停止
npx astro dev logs      # ログ
```

`npm run dev` はプロンプトが返ってきても裏で動き続ける。二重起動する前に `astro dev status` を見ること。

**`src/content.config.ts` を変更したら dev サーバーを再起動すること。**
コンテンツコレクションの定義は起動時に読まれるため、走らせたままだと
`getCollection()` が空配列を返し、**プロジェクト一覧が0件になる**（エラーは出ない）。
ビルドは正しく通るので、dev だけおかしいときはまずこれを疑う。

---

## よくある更新作業

### ニュースを追加する

`src/data/news.ts` の配列**先頭**に追加。トップページは上位5件、`/news` は年別に全件表示する。

```ts
{ date: "2026-09", tag: "paper", ja: "◯◯くんの論文が△△に採択されました！", en: "..." },
```

`tag` は `award | paper | grant | press | lab`。日英どちらも必須（英語版ページで表示される）。

### 論文を追加する

`src/data/publications.ts` の `publications` 配列に追加。順序は不問（ページ側で年降順ソート）。

```ts
{
  authors: "W. Zhang, K. Yoshioka",
  title: "...",
  venue: "IEEE Journal of Solid-State Circuits",
  year: 2026,
  type: "journal",        // journal | conference | domestic
  category: "computing",  // computing | sensing | analog | review
  accRate: "25%",         // 任意
  award: "Best Paper Award", // 任意
  note: "* co-first authors", // 任意
  links: [{ label: "arXiv", href: "https://arxiv.org/abs/..." }],
}
```

同ファイル内に `awards` / `grants` / `sponsors` / `mediaCoverage` / `patentsUrl` もある。
受賞は**学生本人の受賞**なら `src/data/highlights.ts` の `studentAwards` にも追加すること（Recruit の訴求で使う）。

Papers ページのフィルタは全てこのデータから自動生成される（種類・種別・カテゴリ・年）。
新しい年の論文を足せば年の選択肢が増え、`award` を書けば「受賞」フィルタに現れる。
フィルタ側を触る必要はない。

### プロジェクトを追加する

**`src/content/projects/` に `.md` を置くだけ。** Astro のコンテンツコレクションなので、
一覧・詳細ページ・タグフィルタ・関連プロジェクトは自動生成される。
frontmatter のスキーマは `src/content.config.ts` に定義済みで、間違えるとビルドが型エラーで落ちる。

```markdown
---
title: "フルタイトル"
short_title: "短縮名"          # カード見出しに使う
venue: CVPR
year: 2026
status: accepted               # published | accepted | preprint
section: Sensor                # Circuit | Sensor
teaser: foo-teaser.svg         # public/projects/ に置いたファイル名のみ
highlight: true                # 任意。★バッジが付く
authors:
  - name: "K. Ikeda"
    me: true                   # 研究室メンバーは true → 詳細ページで太字
  - name: "M. Isogawa"         # 外部共著者は me なし
tags: [LiDAR, Dataset]
links:
  arxiv: https://arxiv.org/abs/...
  code: https://github.com/...
  paper: https://...
  project: https://...
  press: https://...
description_ja: "日本語の概要。日本語版ページで表示される。"
order: 1                       # 任意。同年内での並び順（小さいほど上）
---

English description here. 英語版ページの本文になる。Markdown が使える。
```

**カード画像は `src/assets/projects/<slug>.webp`。** ファイル名はプロジェクトの
slug（`.md` のファイル名）と一致させる。これだけで `ProjectTeaser` が拾う。

画像はその研究が何をしているかを描いた説明図で、白背景・紺／青＋コーラル1色・
丸角の吹き出しパネル・破線の引き出し線という共通の作風で揃えてある。**文字は
一切入れない**（カード側が学会名・年・タイトルを出すため、また日英で同じ画像を
使い回すため）。作り方は「プロジェクト画像を作り直す」を参照。

**画像がなければ自動生成にフォールバックする。** `src/components/GeneratedTeaser.astro`
が slug から抽象的な構図を描くので、画像がまだなくてもカードは崩れない。
プロジェクト追加が画像待ちでブロックされないようにするための仕組み。

#### プロジェクト画像を作り直す

Codex CLI の画像生成を使う。プロジェクトごとの「何を描くか」は
`scripts/project-art/subjects.json` に1文で書いてある。作風の指定は
`generate.sh` の中に1つだけ持っていて、全プロジェクトに同じものが付く。
**21枚が1つのシリーズに見えるのはこれが理由**なので、作風を1枚だけ変えない。

```bash
# プロジェクトを追加したら subjects.json に1行足してから
bash scripts/project-art/generate.sh              # 未生成のものだけ
bash scripts/project-art/generate.sh ghost-fwl    # 1枚だけ描き直す
node scripts/project-art/to-webp.js               # 16:9に切って webp で src/assets/projects/ へ
```

PNG は `scripts/project-art/out/`（gitignore 済み）に残るので、気に入らなければ
その1枚を消して `generate.sh <slug>` を再実行すれば描き直せる。`CODEX` 環境変数で
codex.exe のパスを上書きできる。

**Recruit ページの「CSGで何が得られるか」の6枚も同じ作風で描いている。** 題材は
`scripts/project-art/recruit.json`、置き場所は `src/assets/recruit/`。`highlights.ts` の
`whyCsg[].art` がファイル名に対応し、画像がなければアイコンだけのカードになる。

```bash
SET=recruit bash scripts/project-art/generate.sh   # out/recruit/ に PNG
node scripts/project-art/to-webp.js recruit        # src/assets/recruit/ へ
```

Codex のサンドボックスは Google Drive 上のフォルダに書き込めない。その場合も画像は
`~/.codex/generated_images/` に残るので、`generate.sh` がログからパスを拾って回収する。

**arXiv リンクがあるプロジェクトは、詳細ページに論文の Figure 1 を自動で載せられる。**

```
pip install pymupdf pillow
python scripts/fetch-figures.py src/content/projects src/assets/figures
```

キャプション「Fig. 1」の位置から図の領域を計算し、高解像度でレンダリングする
（埋め込み画像を抜くのではないので、ベクタの注釈や複数パネルも欠けない）。
取得できたら `src/data/paperFigures.ts` に1行追加する。図が見つからない論文は
スキップされ、生成ティーザーにフォールバックするだけなので失敗しても壊れない。

**一覧カードには論文の図を使わない。** 論文の図は高密度で縦横比もバラバラなため、
カード幅（約380px）では判読できず統一感も崩れる。大きく出せる詳細ページに限って使い、
カードは上記の説明図（なければ生成ティーザー）に統一する。
上流由来の `teaser:` フィールドと `public/projects/*.svg` は互換のため残してあるが、
描画には使っていない（上流のティーザーはダークテーマで、この暖色系サイトから浮くため）。

このデータは https://github.com/Keio-CSG/LabProjectPage から取り込んだもので、
frontmatter の形式はそちらと互換にしてある。

### メンバーを追加・卒業させる

1. `src/data/members.ts` の該当配列（`phdStudents` / `masterStudents` / `bachelorStudents` /
   `researchMembers` / `staff`）に追加。卒業したら `alumni` へ移す（進路 `destination` を記入）
2. 写真があれば `src/assets/members/` に置き、`src/data/photos.ts` の `memberPhotos` に1行追加
3. 個人ページがあれば `url:` を書く（カードに外部リンクアイコンが出る）

```ts
"Taro Keio": taroKeio,   // 上部で import taroKeio from "../assets/members/taro-keio.jpg"
```

**キーは `members.ts` の `name` と完全一致させること。** 一致しないと写真が出ずイニシャル
アバターにフォールバックする（エラーにはならないので気付きにくい）。
写真がないメンバーは暖色系のイニシャルアバターが自動生成されるので、無理に用意しなくてよい。

### 研究テーマを変更する

`src/data/research.ts`。3テーマそれぞれに `title` / `summary` / `projects` / `achievements` /
`collaborators` がある。テーマを増やす場合は `src/pages/[locale]/research.astro` の `visuals`
マップに画像とトリミング設定も追加が必要。

### 説明会の日程を更新する

`src/data/recruit.ts` の `infoSessions`（`year` と `slots`）。`updated` の日付も直すこと。

### 研究室の訴求内容を変える

`src/data/highlights.ts`。トップと Recruit の両方から参照される。

| 項目 | 内容 |
|---|---|
| `whyCsg` | 「CSGで何が得られるか」6項目（実チップ試作／実車走行／国際共同研究／メディア掲載／ゼロから始められる／研究費） |
| `studentAwards` | **学生本人**の受賞。「自分も獲れる」と思わせるための材料 |
| `careerOutcomes` | 卒業生の進路 |
| `openSource` | 公開している GitHub リポジトリ。Projects ページ下部の「GitHub で公開しているコード」に出る。**public のものだけ**載せる |
| `facilities` | 使える設備 |

B3・新M1 の獲得を意識して、実績の羅列ではなく「ここに来たら何ができるか」を具体物で
示す方針で書いてある。この意図を壊さないこと。

---

## Architecture

### Stack

- **Astro 7**（静的出力）+ **Tailwind CSS v4**
- Tailwind v4 は設定ファイルを持たない。**色やフォントは `src/styles/global.css` の `@theme` に定義する**
- `@astrojs/sitemap` が `sitemap-index.xml` を生成
- ビルド成果物は純粋な静的 HTML/CSS/JS（サーバー不要）

### Routing / i18n

日英バイリンガル。`prefixDefaultLocale: true` なので日本語も `/ja` 配下に出る。

- `/ja/...`（既定）と `/en/...`
- ページは `src/pages/[locale]/*.astro`。各ページの `getStaticPaths()` が `locales` を回す
- `src/pages/index.astro` はルートから言語別に振り分ける JS リダイレクト。ヘッダーの言語切替で
  選んだ言語（`localStorage` の `csg-locale`）→ ブラウザの言語設定（`ja` / `en` のうち先に
  出てくる方。どちらもなければ英語）の順で決める。JS 無効時は meta refresh で `/ja`。
  トップページの hreflang `x-default` はこのルートを指す（他のページは `/ja`）
- ヘッダーの言語切替は**現在のページの対応する言語版**にリンクする（`Layout` に渡す `path` を使う）

**文言の置き場所の使い分け:**

| 種類 | 置き場所 |
|---|---|
| ナビ・ボタンなどの UI 文言 | `src/i18n/strings.ts` |
| 本文コンテンツ | `src/data/*.ts` に `{ ja: "...", en: "..." }` で持たせる |
| ページ固有の短い文 | ページ内で `ja ? "..." : "..."` の三項演算子 |

新しいページを追加するときは、必ず `getStaticPaths()` を書き、`Layout` に `locale` と
`path`（`/research` のようなロケール抜きのパス）を渡すこと。`path` を間違えると言語切替が
別ページに飛ぶ。

### ディレクトリ

```
src/
  content/projects/   プロジェクト .md（21件）← ここに置くだけで増える
  content.config.ts   コレクションのスキーマ定義
  data/               コンテンツデータ層（下表）
  i18n/strings.ts     UI 文言
  components/         Header / Footer / Icon / MemberCard / PageHero
  layouts/Layout.astro  共通レイアウト + SEO メタ + JSON-LD
  pages/[locale]/     各ページ
  assets/             Astro が最適化する画像（イラスト・メンバー写真）
  styles/global.css   デザイントークン + 独自ユーティリティ
public/               そのまま配信される静的ファイル（ロゴ・OGP・ティーザーSVG・robots.txt）
figs/                 イラスト原本（サイトからは直接参照しない）
```

| `src/data/` | 内容 |
|---|---|
| `site.ts` | 研究室名・住所・連絡先・居室番号 |
| `research.ts` | 研究3テーマ |
| `publications.ts` | 論文82件 + 受賞・競争的資金・メディア掲載・特許 |
| `members.ts` | メンバー・卒業生 |
| `photos.ts` | メンバー写真の import と名前→画像のマップ |
| `recruit.ts` | 説明会日程・研究トラック・文化・先輩の声・FAQ |
| `news.ts` | ニュース |
| `highlights.ts` | 学生向け訴求 |
| `tools.ts` | 研究室がつくっているツール・教材（TopSSCS、ずんだもんアナログ回路）。Projects ページ下部に出る |

---

## Design system

`figs/` の手描きアイソメトリック・イラストから採色した**暖色系ライトテーマ**。
当初ダークテーマで作ったが「冷たすぎる」との判断で全面的に作り直した経緯がある。
**この温かみを壊さないこと**（彩度の低いグレーや、真っ黒・真っ白を持ち込まない）。

| トークン | 用途 |
|---|---|
| `paper-*` | 背景（クリーム。`paper-100` が地、`paper-50` がカード） |
| `navy-*` | 文字・濃い面（基板の紺） |
| `coral-*` | アクセント（イラストの車の色）。リンク・強調・CTA |
| `sand-*` | 補助（黄）。受賞・ハイライト |
| `sky-*` | 補助（空）。セクション見出しの背景グラデーション |
| `ember-*` | イラストのコーラルから採った唯一の暖色。自動運転セキュリティのトラック色、受賞・強調に少量だけ |

- **Tailwind の任意色（`bg-[#...]` や `bg-slate-500`）は使わず、必ずこのトークンを使う**
- `.paper-card` / `.paper-card-hover` / `.trace-grid` / `.animate-rise` / `.animate-float` は
  `global.css` に定義した独自ユーティリティ
- `prefers-reduced-motion` でアニメーションを止める指定が入っている

### 画像の扱い

- `src/assets/` に置いたものは `astro:assets` の `<Image>` で読む → webp 変換・リサイズ・
  レスポンシブ `srcset` が自動。**`<img>` タグを直に使わない**
- `public/` に置いたものは最適化されない。SVG とロゴ・OGP のみここ
- イラストは縦横比がバラバラ（`main.webp` は横長、`edge`/`health` は縦長の切り抜き）なので、
  並べるときは**固定比率のステージに `object-contain` / `object-cover` で収める**こと。
  そのまま並べると高さが揃わず崩れる
- メンバー写真は画質・トリミングが不揃いなので、円形の小さいアバターにして粗を目立たせない
  方針にしている

---

## Deploy

`main` に push すると `.github/workflows/deploy.yml` が走り、GitHub Pages に自動デプロイされる。

**GitHub Pages 側の設定は「Source: GitHub Actions」であること。**
「Deploy from a branch」になっていると Jekyll がビルドしようとして失敗する（実際に一度踏んだ）。
設定場所: https://github.com/Keio-CSG/Keio-CSG.github.io/settings/pages

### 独自ドメインへの移行

`csg.keio.jp` などに移す場合、以下3箇所をまとめて変更する:

1. `astro.config.mjs` の `site` と `base`（サブドメイン直下なら `base` は削除）
2. `public/robots.txt` の Sitemap URL
3. `public/CNAME` を新規作成してドメイン名を書く

`base` を変えると全ページのリンクが変わる。変更後は必ず `npm run build` して
`dist/` 内のリンク切れを確認すること。

---

## SEO

`src/layouts/Layout.astro` が canonical / hreflang / OGP / `ResearchOrganization` の
JSON-LD を出力している。ページを追加しても自動で付く。

**旧 Google Sites がまだ検索上位にあるため、完全移行するときは:**

1. Google Search Console に新サイトを登録し `sitemap-index.xml` を送信
2. Google Sites には自動リダイレクトが設定できないので、各ページ冒頭に移転告知リンクを手動設置
3. Google Scholar・researchmap・学内ディレクトリなど外部からの参照 URL を更新
4. 順位が安定するまで旧サイトは消さない

現状は `keio-csg.github.io` ドメインなので、SEO 上は `keio.jp` 配下のカスタムドメインに
移した方が有利。

---

## 変更後の確認

```
npm run build
```

が通ることを最低限確認する。加えて見るとよい点:

- 日英**両方**のページを開く（英語版だけ文言が抜けているミスが起きやすい）
- モバイル幅（375px 程度）で崩れていないか
- `dist/` 内に `undefined` や `[object Object]` が出ていないか
- 内部リンクが切れていないか（`base` を変えた直後は特に）

---

## Astro docs

- [Routing](https://docs.astro.build/en/guides/routing/)
- [Content collections](https://docs.astro.build/en/guides/content-collections/)
- [Images](https://docs.astro.build/en/guides/images/)
- [i18n](https://docs.astro.build/en/guides/internationalization/)
