# AI 協作規則（Starting）

這是**教學用個人形象網站**，不是完整 SaaS。

## 硬性規則

- **不要**加入資料庫、Prisma、Supabase、登入、後台、Stripe
- **不要**把專案改成 monorepo 或引入 supastarter 全套套件
- 學員改文案時，**優先只改 `site.config.ts`**
- 需要改版型時，只動 `components/` 與 `app/globals.css`

## 專案結構

```
site.config.ts     ← 學員主要編輯（名字、介紹、服務、聯絡）
app/page.tsx       ← 組合各區塊，通常不用改
components/        ← 版面；進階才改
TEACHING.md        ← 給人類學員看
```

## 部署

- 零環境變數即可 build
- 目標平台：Vercel（學員用 GitHub 登入）

## 回應語言

- 對學員說明用**繁體中文、白話**
