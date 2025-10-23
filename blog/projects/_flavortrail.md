---
title: "Flavor Trail 餘味尋蹤 RWD 網站"
authors: [clove]
tags: [ side-project ]
---
> Flavor Trail 餘味尋蹤食品分享 RWD 網站

我們希望創建一個平台，讓商家和個人能夠方便地 捐贈或領取多餘的食品，從而促進資源的有效利用，保護環境， 通過合作和參與實現「零食物浪費」的目標，打造更可持續的未來。

<!-- truncate -->
<img src="/img/flavortrail-cover.webp" />


後台測試帳號：`flavortrail@gmail.com`\
後台測試密碼：`20250316`


## 相關連結
### [線上 Demo](https://ariel0508.github.io/flavor-trail-react/)
### [GitHub repository](https://github.com/CloveTseng/flavor-trail-react?tab=readme-ov-file)

---

## 團隊組成
- 前端開發: 前端組成員共 4 名

---

## 主要功能介紹
<img src="/blog/Slide_08.png" />
<img src="/blog/Slide_09.png" />
使用者在首頁可以查看目前爆發指數，並且點擊『下班儀式』選擇要藉由吶喊練習或是平靜呼吸來達到釋放壓力


<img src="/blog/Slide_10.png" />
<img src="/blog/Slide_11.png" />

- 吶喊練習: 使用者的吶喊分貝數會即時反應在畫面上，達到一個視覺化的情緒釋放體驗。
- 平靜呼吸: 提供引導式的呼吸練習，幫助使用者在壓力事件後恢復平靜。
- 個人目標設定: 使用者可以設定每日的呼吸練習與睡眠目標。
- 情緒分析: 透過圖表視覺化呈現使用者的情緒與練習數據。

---

## 使用技術關鍵字
- React
- React Hooks
- React Router
- Router Redux
- Bootstrap
- Axios
- JSON server
- Git
- GitHub

---

## 個人負責任務
### 1. 使用 JSON Server 搭配 Render 模擬 RESTful API

---

## 困難與解決

### 1. 分析頁面有大量圖表，要怎麼處理？
<img src="/blog/Slide_13.png" />
因為我們主要使用 Vue3 來開發，所以我先查找了 stack overflow 技術論壇上面相關的討論。再去比較幾個較多人在使用的 Chart.js、D3.js、ECharts 工具或是直接使用 `<canvas>` 來繪製。

考量到這次專案以靜態呈現為主，沒有數據可以產出圖表，並且也不想要太複雜化，

所以最終只有『大吼時段』的日、週、月、年切換的熱力圖 + 日期圖表是使用 ECharts 來處理；

而其他的圖表比較單純、重複利用性也較低，就直接用 `<canvas>` 搭配 `Gemini` 來繪製。

### 2. 與設計師 QA 溝通與協調：圓環與設計稿不一樣
<img src="/blog/Slide_14.png" />
一開始開發時的想法是先畫個圓型然後再切半來顯示，\
在調整圓環和內文字的間距的時候發現設計師的 UI 並不是正圓型的，\
試著調整幾次後跟設計師進行畫面上的非同步討論，\
在互相討論各自想法與開發的可行性後決定調整設計稿並且開發的部份把圓再加大呈現來達到畫面的平衡

### 3. 關注效能及 SEO 方面

其中一位成員為資深前端工程師，從他身上學習到了許多：

- 包含元件與資料流向要怎麼拆的漂亮
- Meta Tags 的撰寫 (SEO 的重要性)
- 網站效能注重 (使用 Google PageSpeed 檢測)
<img src="/blog/highlight-3.png" />

---

## 結語
在這個專案除了增加了 Nuxt.js (Vue3) 的實戰開發經驗，也增加了不少直接跟設計師的溝通經驗，有時候設計師與工程師考量的面向不相同之外，技術語言上也不相同，要如何在之間找到平衡點是一大課題。