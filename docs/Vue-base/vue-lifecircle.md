---
title: Vue 生命週期
description: 工作時要追求效率，但學習不是
authors: [clove]
tags: [Vue.js, JavaScript]
---
:::note
本站 Vue 的撰寫風格都是 Composition API
:::

## 什麼是 Vue 的生命週期
先把元件想像成一間快閃店，而生命週期就是從 **裝修** -> **開幕** -> **拆除** 的過程 

## 在 Vue3 Composition API (`<script setup>`) 中最重要的 3 個階段
1. 出生前 (Creation)：準備資料、定義變數
2. 掛載/開幕 (Mounting)：畫面畫好了，DOM 出現了
3. 卸載/打烊 (Unmounting)：切換頁面，元件被銷毀

## 在 3 階段中我該做什麼？
| 階段 | 生命週期(Hook) | 說明 | 做什麼？ |
| ------ | ----------- | ----- | ----- |
| 1. 準備 | 無 | 備料 | 宣告 `ref`, `reactive` |
| | `<script setup>` | 還在裝潢 | 定義函式(Function) |
| 2. 出現 | `onMounted` | 正式開幕! | 呼叫 API |
| | | 客人看到店面了(DOM 存在) | 操作 DOM (綁定 Canvas, Chart.js) |
| | | | 設定 `setInterval` |
| 3. 消失 | `onUnmounted` | 撤櫃 | 清除計時器 (`clearInterval`) |
| | | 清場 | 取消監聽事件 (`removeEventListener`) / 防止記憶體洩漏 |



