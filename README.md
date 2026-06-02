# Starting

個人形象網站 · 教學專用版（用 AI + GitHub 快速上線）

- 無資料庫、無後台、無登入
- 學員主要改 `site.config.ts`
- 可部署到 Vercel（建議 GitHub 登入）

## 快速開始

```bash
git clone https://github.com/fishtvlvoe/Starting.git
cd Starting
pnpm install
pnpm dev
```

瀏覽器打開 http://localhost:3100

## 學員請讀

- [TEACHING.md](./TEACHING.md) — 操作步驟
- [preset-personal.json](./preset-personal.json) — 範例文案

## 產品圖片

上線用圖在 `public/demo/*.webp`。若要換圖，改 `site.config.ts` 的 `products[].imageUrl`。

## 技術

Next.js 16 · React 19 · Tailwind CSS 4 · TypeScript
