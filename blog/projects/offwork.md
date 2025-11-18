---
title: "OFFWORK 心靈健康 APP"
authors: [clove]
tags: [ side-project ]
---
## 前言

這款用 **Vue3 + Nuxt.js** 開發、部署在 **Vercel** 的心靈健康 APP，旨在幫助使用者「心理下班」，從工作模式平穩切換到生活狀態。

🎮 一起體驗 👉 [線上 Demo](https://offwork.clovetseng.dev/) | [GitHub repository](https://github.com/CloveTseng/offwork)

<!-- truncate -->
<img src="/img/cover.png" />

## 靈感來自於…

**OFFWORK** 由 UI/UX 成員設計 + 3 位前端成員協作開發，作為一套「下班儀式引導」，透過語音、書寫與互動模組，幫助使用者切斷工作連結、釋放壓力，建立可持續的「心理下班習慣」。

## 特色

### 主要功能

<img src="/blog/Slide_08.png" />
<img src="/blog/Slide_09.png" />
使用者在首頁可以查看目前爆發指數，並且點擊『下班儀式』選擇要藉由吶喊練習或是平靜呼吸來達到釋放壓力

<img src="/blog/Slide_10.png" />
<img src="/blog/Slide_11.png" />

- **吶喊練習**: 使用者的吶喊分貝數會即時反應在畫面上，達到一個視覺化的情緒釋放體驗。
- **平靜呼吸**: 提供引導式的呼吸練習，幫助使用者在壓力事件後恢復平靜。
- **個人目標設定**: 使用者可以設定每日的呼吸練習與睡眠目標。
- **情緒分析**: 透過圖表視覺化呈現使用者的情緒與練習數據。

### 部署方式

本專案部署於 **Vercel**，利用其自動部署與 CDN 加速功能，確保使用者能快速載入應用。

---

## 個人負責任務：
### 環境建置
   我負責本專案的 `Nuxt.js` 環境建置，負責初始化專案架構、設定 Meta Tags 相關資料，以確保 SEO 友善性。由於 `Nuxt` 的資料夾即路由特性，所以事先規劃並建立好後續開發所需的檔案與資料夾結構。

```ts title="nuxt.config.ts"
export default defineNuxtConfig({
  // ...
  app: {
    head: {
      title: "健康生活 OFFWORK APP",
      htmlAttrs: {
        lang: "zh-Hant",
      },
      meta: [
        {
          name: "description",
          content: `丟掉煩惱，讓腦袋準時下班。用 OFFWORK 啟動你的下班人生。`,
        },
        // ...
      ],
    },
  },

  lottie: {
    componentName: "Lottie",
    lottieFolder: "/assets/lottie",
  },

  googleFonts: {
    families: {
      "Noto+Sans+TC": [400, 500, 700],
    },
  },
  // ...
});
```

### 分析頁面與流程
   我負責分析頁面以及相關的流程開發，並且使用 **GSAP** 來處理載入時圖表的動畫，以及部份使用 **ECharts** 開發圖表。

<img src="/blog/Slide_12.png" />

### 使用技術：
- Vue3 (Composition API)
- Nuxt.js
- TailwindCSS
- GSAP
- ECharts
- Git
- Vercel

## 開發背後的那些事｜Q&A with Clove

### Q：可以再多補充一點這次的開發流程細節嗎？

一開始是先請 UI/UX 組分享這個 APP 主要的功能及一些需要注意的小地方，會後前端組再就設計稿與 prototype 研究怎麼實現。

並且由我這裡參考資深工程師之前 repo 的檔案結構及 config 寫法來建立整體環境，平常開發就直接從頁面本身下手，很少先專注在 config 檔案。這次的經驗讓我更深入了解 Nuxt.js 的配置細節，包括 Meta Tags 設定、Google Fonts 載入等。

開發中途我也會詢問其他工程師如果是他們會怎麼處理某個功能，從中學習不同的解法與面向。

最後遠端部署到 **Vercel** 而不是 GitHub Pages 是因為 Vercel 對 Nuxt.js 有更好的原生支援，包括：

- 自動偵測 Nuxt 專案，無需額外配置
- SSR/SSG 的無縫切換
- 自動部署功能（推送到 GitHub 時自動更新）

相較於 GitHub Pages 主要支援靜態網站，Vercel 能更好地處理 Nuxt.js 的動態路由和服務端渲染需求，同時提供全球 CDN 加速，確保使用者體驗。

### Q：選擇 ECharts 和 Canvas，有什麼原因嗎？

在開發分析頁面時，因為有大量圖表需要處理，我先查找了 StackOverflow 技術論壇上面相關的討論，再去比較幾個較多人在使用的 Chart.js、D3.js、ECharts 工具或是直接使用 `<canvas>` 來繪製。

<img src="/blog/Slide_13.png" />

考量到這次專案以靜態呈現為主，沒有數據可以產出圖表，並且也不想要太複雜化，所以最終只有『大吼時段』的日、週、月、年切換的熱力圖 + 日期圖表是使用 ECharts 來處理；而其他的圖表比較單純、重複利用性也較低，就直接用 `<canvas>` 搭配 `Gemini` 來繪製。

### Q：在開發過程中，有沒有哪個細節讓你印象最深？

與設計師的溝通協調過程讓我印象深刻。在開發圓環圖表時，一開始的想法是先畫個圓型然後再切半來顯示，但在調整圓環和內文字的間距的時候發現設計師的 UI 並不是正圓型的。

<img src="/blog/Slide_14.png" />

試著調整幾次後跟設計師進行畫面上的非同步討論，在互相討論各自想法與開發的可行性後決定調整設計稿，並且開發的部份把圓再加大呈現來達到畫面的平衡。這個過程讓我學到設計師與工程師考量的面向不相同，技術語言上也不相同，要如何在之間找到平衡點是一大課題。

### Q：這次開發中你學到最多的是什麼？

其中一位成員為資深前端工程師，從他身上學習到了許多：

- 包含元件與資料流向要怎麼拆的漂亮
- Meta Tags 的撰寫 (SEO 的重要性)
- 網站效能注重 (使用 Google PageSpeed 檢測)

<img src="/blog/highlight-3.png" />

在這個專案除了增加了 Nuxt.js (Vue3) 的實戰開發經驗，也增加了不少直接跟設計師的溝通經驗。

## 小結

在這個專案除了增加了 Nuxt.js (Vue3) 的實戰開發經驗，也增加了不少直接跟設計師的溝通經驗。有時候設計師與工程師考量的面向不相同之外，技術語言上也不相同，要如何在之間找到平衡點是一大課題。透過這次的協作經驗，讓我更了解如何在技術可行性與設計美感之間取得平衡。