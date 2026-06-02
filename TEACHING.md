# Starting · 學員教學（簡短版）

> 目標：半天做出 **可以傳給別人的網址**。  
> 不用資料庫、不用後台、不用寫程式。

---

## 你要準備

- GitHub 帳號
- 電腦 + 瀏覽器
- 建議安裝 [Cursor](https://cursor.com)

不必準備：資料庫、Supabase、Stripe、金流後台。

---

## 三步驟總覽

1. **Fork + Clone** 模板到自己的 GitHub  
2. **用 AI 改** `site.config.ts`（文案、服務、Q&A、部落格、產品圖）  
3. **Vercel 部署** → 得到 `https://xxx.vercel.app`

---

## 第一步：取得專案

1. 打開 https://github.com/fishtvlvoe/Starting  
2. 點右上角 **Fork**（複製到你自己的 GitHub）  
3. 終端機執行（把網址換成 **你 Fork 後** 的 repo）：

```bash
git clone https://github.com/你的帳號/Starting.git
cd Starting
pnpm install
pnpm dev
```

4. 瀏覽器打開：**http://localhost:3100**

---

## 第二步：用 AI 改內容（最重要）

在 Cursor 打開 `Starting` 資料夾，貼 **你的 GitHub repo 連結**，再貼下面這段：

```
這是個人形象網站教學專案 Starting，沒有資料庫。

請只幫我改 site.config.ts：
- 名字、一句話介紹
- 關於我（2～3 段）
- 服務 3 項
- Q&A 3 題
- 部落格 2 篇（標題、摘要、內文）
- 聯絡：email 或 LINE（至少一項）
- 產品展示 4 項（名稱、說明；圖片路徑維持 /demo/1.webp～4.webp 或告訴我怎麼換圖）

不要加資料庫、登入、後台、Stripe。
改完列出你改了哪些欄位。
```

存檔後，瀏覽器重新整理看結果。右上角可切換 **深色 / 淺色**。

### 只改一個檔案就夠（進階才動別的）

| 檔案 | 用途 |
|------|------|
| `site.config.ts` | 名字、介紹、服務、Q&A、部落格、產品、聯絡 |
| `public/demo/*.webp` | 產品圖（可換成自己的圖） |

第一堂課 **不要** 改 `components/` 或加新功能，除非老師同意。

### 換產品圖（選修）

1. 圖片建議 **800×600**（4:3），每張約 **200KB 內**  
2. 放到 `public/demo/`，例如 `1.webp`  
3. 在 `site.config.ts` 的 `products[].imageUrl` 填 `/demo/1.webp`

---

▋ 選修：Open Design × Starting（先做版型，再套內容）

[Open Design](https://github.com/nexu-io/open-design) 是開源的設計工具（本機或網頁），用對話生出 landing 草稿，可匯出 HTML，也可接 **MCP** 讓 Cursor 直接讀你正在編的畫面。

一句話分工：**Open Design 管長相，Starting 管文案與上線網址。** 第一堂課不要整份 HTML 轉成 React，只搬配色、圖、文案即可。

▋ 在 Open Design 裡先做出草稿

• 安裝：到 [open-design.ai](https://open-design.ai/) 下載桌面版，或從 GitHub clone 後執行 `pnpm install` → `pnpm tools-dev run web`（詳見官方 README）

• 介面可選 **繁體中文**

• 新建專案，選 skill 例如 **saas-landing** 或 **web-prototype**，再貼下面「開場 prompt」

• 等畫面出來後，可微調配色與區塊；滿意再進 Starting

▋ Open Design 開場 prompt（可複製）

```
做一個繁體中文的個人形象網站 landing，區塊包含：
Hero（名字+一句話+聯絡按鈕）、關於我、三項服務、Q&A 三題、
四格產品展示（不要價格）、部落格預覽三篇、聯絡我們。
風格乾淨專業，適合顧問或自由業，手機也要能看。
```

▋ 路線 A：MCP 接到 Cursor（進階、最快對齊版型）

• 先讓 **Open Design 本機在跑**（桌面 App 或 `pnpm tools-dev`），MCP 才能讀專案檔

• 在 Open Design：**Settings → MCP server** → 選 **Cursor**，一鍵安裝或複製 JSON 到 `~/.cursor/mcp.json`

• **重開 Cursor**（或 MCP 設定頁 Reload），確認 Open Design 那條是綠燈

• 用 Cursor 打開你的 **Starting** 資料夾，貼下面「套進 Starting」那段話

• MCP 是**唯讀**：讀設計稿、搜檔、對照樣式；真正改檔仍只在 Starting 裡做

若 tool 一直連不上：確認 Open Design 已啟動 → 再重開 Cursor 一次。

▋ 路線 B：匯出 HTML（沒裝 MCP 時用最簡單）

• 在 Open Design 對成品按 **Share → Export as standalone HTML**

• 把 HTML 存到電腦（或整份貼進 Cursor 對話）

• 打開 Starting，貼下面「套進 Starting」話術，並附上 HTML 或說「請對照附件的配色與區塊順序」

• 產品圖：從 OD 匯出或自己準備 → 放到 `public/demo/`，檔名對應 `site.config.ts` 的 `imageUrl`

▋ 套進 Starting 的 Cursor 話術（兩條路線通用）

```
我有 Open Design 的個人形象 landing 草稿（MCP 已連上目前專案 / 或附件 HTML）。

請只改 Starting，不要加資料庫、登入、後台：
1. site.config.ts — 文案我提供：［貼你的名字、服務、Q&A、聯絡方式］
2. app/globals.css — 對照 OD 的配色（主色、背景、字色）
3. public/demo/ — 產品圖若我有新圖請告訴我檔名怎麼對

不要重寫整站、不要整份 HTML 轉 React。改完列出改了哪些檔案。
```

▋ 建議課堂節奏（含 Open Design，約半天）

| 時間 | 內容 |
|------|------|
| 0:00～0:30 | 開 Open Design，生出 landing 草稿 |
| 0:30～1:00 | Fork Starting → clone → `pnpm dev` |
| 1:00～1:30 | 改 `site.config.ts`（文案） |
| 1:30～2:00 | MCP 或 HTML，套 `globals.css` 配色 |
| 2:00～2:30 | 換 `public/demo` 產品圖 |
| 2:30～3:00 | push → Vercel，手機開網址交作業 |

---

## 第三步：上線（Vercel）

1. 把改動 push 到你自己的 GitHub（不會可問 AI：「幫我 commit 並 push」）  
2. 打開 https://vercel.com ，用 **Continue with GitHub** 登入  
3. **Add New Project** → 選你的 **Starting** repo  
4. **不用填環境變數**，直接 Deploy  
5. 完成後會有 `https://xxx.vercel.app` → 用手機開一次確認

---

## 完成檢查（交作業用）

- [ ] 首頁有你的名字與一句話介紹  
- [ ] 關於、服務、Q&A、產品展示都有內容  
- [ ] `/blog` 有文章，點進去不是空白  
- [ ] 聯絡方式能點（Email 或 LINE）  
- [ ] 有一個 Vercel 網址可以分享  

---

## 常見問題

**一定要會寫程式嗎？**  
不用。會複製貼上、會跟 AI 講需求就好。

**改完看不到？**  
確認有存檔，終端機 `pnpm dev` 還在跑，瀏覽器重新整理。

**在部落格頁點「關於」沒反應？**  
請 `git pull` 更新到最新版 Starting（連結應為 `/#about` 這種）。

**聯絡表單會存資料嗎？**  
不會。只有 Email / LINE 按鈕，沒有後台。

---

## 給講師（Fish）

示範順序（基礎）：Fork 示範 → Clone → 改 `site.config.ts` → 本機預覽 → Vercel → 手機開網址。

有加 Open Design：先 OD 出草稿 → 再 Starting 套文案與配色（見上方「Open Design × Starting」）。

完整 SOP：`Development/docs/teaching-starter-教學專用版-SOP.md`
