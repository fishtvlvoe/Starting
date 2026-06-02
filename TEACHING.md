# 個人形象網站 · 學員教學手冊

> 目標：半天內做出一個可以分享的網址。  
> 不需要資料庫、不需要後台、不需要 Stripe。

---

## 你需要準備什麼

| 必備 | 說明 |
|------|------|
| GitHub 帳號 | 用來存放你的程式、部署到 Vercel |
| 電腦 + 瀏覽器 | 建議安裝 [Cursor](https://cursor.com) 或能用 AI 的編輯器 |

| 不必備 | 說明 |
|--------|------|
| 資料庫 | 本專案沒有 |
| Supabase / Neon | 不用 |
| 金流 | 不用 |

部署時建議用 **GitHub 登入 Vercel**，不用再記一套密碼。

---

## 你要改哪裡（最重要）

**只改一個檔案：`site.config.ts`**

裡面有：名字、一句話介紹、關於我、服務項目、Email / LINE。

改完存檔，本機執行 `pnpm dev` 就能預覽。

---

## 操作步驟

### 1. 取得專案

```bash
git clone <你的教學倉庫網址>
cd teaching-personal
pnpm install
pnpm dev
```

瀏覽器打開：http://localhost:3100

### 2. 用 AI 幫你改文案

把 GitHub 連結貼進 Cursor，再貼：

```
這是個人形象網站教學專案，沒有資料庫。
請只幫我改 site.config.ts：
- 名字：[你的名字]
- 一句話介紹：[你的服務]
- 關於我：[2～3 句]
- 服務 3 項
- 聯絡 email 或 LINE

不要新增資料庫或登入功能。改完列出你動了哪些欄位。
```

### 3. 部署到 Vercel（上線）

1. 把專案 push 到你的 GitHub
2. 打開 https://vercel.com ，用 **Continue with GitHub** 登入
3. Import 你的 repository
4. 不用填環境變數（本專案零 env）
5. Deploy → 得到 `https://xxx.vercel.app`

---

## 常見問題

**Q：一定要會寫程式嗎？**  
不用。會複製貼上、會跟 AI 講你要什麼就好。

**Q：可以換顏色或版型嗎？**  
可以，請 AI 改 `app/globals.css` 或 `components/`，但第一堂課建議先只改文案。

**Q：聯絡表單會存資料嗎？**  
不會。目前是 Email / LINE 按鈕，沒有後台。

---

## 給講師

示範影片建議流程：Clone → 改 `site.config.ts` → 本機預覽 → Vercel 部署 → 手機打開網址。
