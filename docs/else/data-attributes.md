---
title: Data Attributes
description: 工作時要追求效率，但學習不是
authors: [clove]
tags: [html]
---

## 什麼是 Data Attributes

在 HTML5 可以在 HTML 元素上使用 `data-` 作為前綴來加上自定義的資料

## 用途
Data Attributes 主要用於在前端儲存一些只有 JavaScript 需要使用的相關資料，而這些資料又沒有合適的標準 HTML 屬性可以存放時。

## 怎麼用
1. 在 HTML 上自定義資料
```html
<div
  id="product-card"
  data-product-id="12345"
  data-category="electronics"
  data-in-stock="true"
>
  商品名稱
</div>
```
- 屬性名稱只能小寫字母、數字、連字號
- JS 讀取時會將連字號後的字母轉成駝峰，例 `productId`

2. JavaScript 讀取 (`dataset`)

```js
const productElement = document.querySelector('#product-card')

// 讀取資料
const productId = productElement.dataset.productId; // '12345'
const category = productElement.dataset.category; // 'electronics'
const inStock = productElement.dataset.inStock === 'true'; // 值都是字串

//修改資料
productElement.dataset.inStock = 'false';
```

## 注意事項
- 還是要使用正確的 HTML 標籤
- 在框架中使用率較低，但一些第三方套件可能還是用的到
- 可以用在 css 的額外狀態，例：`<button data-theme="dark">`

---
## 其他
### 使用 `Vue` 的話怎麼呈現
> 收合卡片使用 JS 的話可能會使用 `data-state="open"` 來處理，而 `vue` 的話則是使用 `ref` 來管理開關

```jsx
<script setup>
  import { ref } from 'vue';
  //next-line
  const isOpen = ref(false);
  const toggleCard = () => {
    isOpen.value = !isOpen.value;
  }
</script>

<template>
  <div class="card" @click="toggleCard">
    <div>
      <h3>
        產品資訊
        <span>{{ isOpen ? '▲' : '▼' }}</span>
      </h3>
    </div>
//next-line
    <div v-show="isOpen">
      <p>這是詳細的產品描述內容，只有當狀態為開啟 (isOpen: true) 時才會顯示。</p>
      <p>產品編號: 1111</p>
    </div>
  </div>
</template>
```


---
## CODE
連結到 [Codepen](https://codepen.io/CloveTseng1026/pen/PwZQeZR)
