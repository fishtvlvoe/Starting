/**
 * 學員主要改這個檔案就好（名字、介紹、服務、聯絡方式）。
 * 不用資料庫、不用後台。
 */

export type ServiceItem = {
	title: string;

	description: string;
};

export type ProductItem = {
	/** 圖片說明（無障礙） */
	alt: string;

	/** 產品名稱 */
	name: string;

	/** 一句話介紹 */
	description: string;

	/** 圖片網址（可填 Unsplash 或你自己上傳的圖） */
	imageUrl: string;

	/** 小標籤，例如：熱門、新品 */
	badge?: string;
};

export type FaqItem = {
	question: string;
	answer: string;
};

export type BlogPost = {
	slug: string;
	title: string;
	excerpt: string;
	content: string;
	date?: string;
	author?: string;
	tags?: string[];
};

export const site = {
	/** 網站標題（瀏覽器分頁） */
	title: "陳小華 · 品牌顧問",

	/** 你的名字或品牌名 */
	name: "陳小華",

	/** 一句話說明你是誰 */
	tagline: "協助中小企業把品牌說清楚，讓客戶一眼就懂你",

	/** 首頁按鈕文字 */
	heroCtaLabel: "聯絡我們",

	/** 首頁產品展示（圖片放 public/demo/，上線用 .webp；原圖備份在 demo/originals/） */
	products: [
		{
			alt: "品牌定位診斷服務示意圖",
			name: "品牌定位診斷",
			description: "半天工作坊，釐清你是誰、服務誰、和競品差在哪。",
			imageUrl: "/demo/1.webp",
			badge: "熱門",
		},
		{
			alt: "官網文案套組服務示意圖",
			name: "官網文案套組",
			description: "首頁、關於、服務、聯絡區塊文案，改完就能上線。",
			imageUrl: "/demo/2.webp",
		},
		{
			alt: "一對一顧問陪跑服務示意圖",
			name: "一對一顧問陪跑",
			description: "每月固定會議，陪你把行銷節奏與內容計畫跑起來。",
			imageUrl: "/demo/3.webp",
			badge: "推薦",
		},
		{
			alt: "形象視覺拍攝服務示意圖",
			name: "形象視覺拍攝",
			description: "個人品牌照與社群素材，讓官網看起來更可信。",
			imageUrl: "/demo/4.webp",
		},
	] satisfies ProductItem[],

	/** 首頁 Q&A（FAQ）內容 */
	faq: [
		{
			question: "你適合哪種人？",
			answer: "你是中小企業、自由工作者、或剛開始想把服務講清楚的人。只要你有「想說的話」，我們就能把它整理成客戶聽得懂的版本。",
		},
		{
			question: "一定要有資料或官網素材嗎？",
			answer: "不用一開始就很完整。第一步會先用問題把素材缺口補齊；如果你只有想法或草稿，也可以一起做。",
		},
		{
			question: "會不會寫得太行銷？",
			answer: "不會走浮誇路線。我們以「清楚、可信、好理解」為主，讓客戶看完就知道你能解決什麼問題。",
		},
	] satisfies FaqItem[],

	/** 關於我（可多段，用空行分段） */
	about: `我是陳小華，專注在品牌定位與官網文案。

過去十年協助超過 30 家小型企業與自由工作者，把「想說的話」整理成客戶聽得懂的版本。`,

	/** 服務或作品（建議 2～4 項） */
	services: [
		{
			title: "品牌定位工作坊",
			description: "半天梳理你是誰、服務誰、和別人哪裡不同。",
		},
		{
			title: "官網文案規劃",
			description: "把首頁、關於、服務頁的文案寫到能直接上線。",
		},
		{
			title: "一對一顧問",
			description: "每月固定會議，陪你把行銷節奏跑起來。",
		},
	] satisfies ServiceItem[],

	/** 聯絡方式（至少填一項） */
	contact: {
		email: "hello@example.com",
		lineUrl: "",
		phone: "",
	},

	/** 部落格（純靜態，沒有資料庫；學員可直接改這裡） */
	blog: [
		{
			slug: "brand-clarity",
			title: "這是我的第一篇文章",
			date: "2023-03-01",
			author: "陳小華",
			tags: ["first", "post"],
			excerpt: "這是我的第一篇文章，超興奮能跟大家分享！",
			content: `大家好，我是陳小華。這篇是我們教學示範站的第一篇文章。

如果你正在用 AI 做個人形象網站，你會發現最難的往往不是寫程式，而是「不知道網站要放什麼」。所以我們先把最常見的區塊準備好：首頁介紹、服務、Q&A、部落格、聯繫我們。

接下來你只要改 site.config.ts，把名字、服務、文章內容換成你的，就能在本機預覽，再部署到 Vercel 分享給客戶看。

下一篇我會分享：我平常最喜歡放進官網的三種內容（案例、常見問題、最新消息）。`,
		},
		{
			slug: "favorite-things",
			title: "我最喜歡放進官網的三種內容",
			date: "2023-02-28",
			author: "陳小華",
			tags: ["first", "post"],
			excerpt: "在這篇文章裡，我想跟你分享我最常建議客戶放在網站上的內容。",
			content: `很多小型品牌一開始只有一頁式網站，這完全沒問題。重點是你放的內容能不能讓訪客快速建立信任。

第一種：案例或作品。不用很多，3 個就夠。讓人一眼知道「你做過什麼」。

第二種：Q&A。把客戶最常問的價格、流程、時間先寫好，可以少掉很多來回私訊。

第三種：最新消息或部落格。不用天天更新，但偶爾寫一兩篇，會讓網站看起來是「活的」，也利於搜尋。

如果你正在做教學專案，建議先從這三塊開始填，比追求華麗動畫更有感。`,
		},
	] satisfies BlogPost[],

	/** 頁尾小字 */
	footerNote: "© 2026 陳小華. 個人形象網站示範。",
} as const;
