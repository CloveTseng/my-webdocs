---
title: Pinia
description: 工作時要追求效率，但學習不是
authors: [clove]
tags: [Vue.js, JavaScript]
---
:::note
本站 Vue 的撰寫風格都是 Composition API
:::
:::info
在 vue 中，如果只是單純的父傳子、子傳父，可以使用 `props/emits` 來做單向的資料傳遞；\
有多個元件要傳遞資料的話，就可以用到 `provide` 將父元子的值傳給所有的子元件，\
並且子元件再使用 `inject` 來接收

如果只用 `provide` 來處理複雜的狀態，例：使用者資料、購物車狀態、通知訊息、主題…，\
就會需要定義一大堆 `provide`，並且子元件可以直接修改 `provide` 的值，除錯時跟本找不到問題點

所以就有了深海的大鳳梨可以來幫你處理這個狀況 🍍
:::

## 原理
