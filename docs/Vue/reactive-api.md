---
title: Vue3 核心慨念 - 響應式 API (Reactive API)
description: 工作時要追求效率，但學習不是
authors: [clove]
tags: [Vue.js, JavaScript]
---
:::note
本站 Vue 的撰寫風格都是 Composition API
:::
:::info
> 響應式 API 是什麼？

原生的 JS 如果畫面的資料有變動，需要手動操作 DOM 來更新。
響應式 API 的慨念出現，很大的解決了這個問題，讓資料跟畫面的更新變成自動化
:::

## 常見的響應式 API：

### `ref()`
- 用來處理單一值的響應式資料，像是數字、字串或布林值。
- 需要使用 `.value` 來存取或修改值

> 看這裡 [`ref()`的每日任務練習](../vue-daily/10.methods.md)

### `reactive()`
- 用來處理物件或陣列相對複雜的資料 (只能用於物件或陣列)
- 可以直接存取物件的屬性來修改值，不需要使用 `.value`
- 例：
  ```jsx
  <script setup>
    import { reactive } from 'vue';
    //這裡 cart 就是一個響應式物件
    const cart = reactive({
      count: 0,
      items: [],
      totalPrice: 0
    })
  </script>
  <template>
    <div>
      <h2>購物車</h2>
      //這裡的用法就很直覺
      <p>商品總數: {{ cart.count }}</p>
      <p>總價: ${{ cart.totalPrice }}</p>
      <ul>
        <li v-for="item in cart.items" :key="item.id">
          {{ item.name }} - ${{ item.price }} x {{ item.quantity }}
        </li>
      </ul>
    </div>
  </template>
  ```
- 要注意：如果將物件中的屬性解構或是重新賦值，就會失去響應式

### `computed()`
- 依據資料計算出一個新的值
- 資料改變時才會重新計算

> 看這裡 [`computed()`的每日任務練習](../vue-daily/11.computed.md)

### `watch()`
- 用來『監聽』一個或多個響應式資料的變化，並在資料變動時執行特定的動作
- 例：
  - 使用者輸入完畢，發送 API 請求
  - 表單欄位的資料驗證
  - 使用者登入時，清除快取

> 看這裡 [`watch()`的每日任務練習](../vue-daily/12.watch.md)

:::tip
> `computed()` 跟 `watch()` 什麼時候用誰？
- 需要一個新的值，由現有的資料來產生，用 `computed()`
- 資料變動後，觸發特定動作，用 `watch()`
:::
