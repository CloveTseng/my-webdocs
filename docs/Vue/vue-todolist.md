---
title: Vue 版的 TodoList
description: 工作時要追求效率，但學習不是
authors: [clove]
tags: [Vue.js, JavaScript]
---
:::note
本站 Vue 的撰寫風格都是 Composition API
:::
:::info
練習用 Vue 寫一個 TodoList
:::

## CODE

```jsx
<script setup>
import { ref } from "vue";
//next-line-start
const newItem = ref('');
const newCount = ref(0);
//next-line-end
const itemsData = ref([
  {
    id: 1,
    title: '飛機餅干',
    count: 50
  },
  {
    id: 2,
    title: '可口奶茲',
    count: 20
  },
  {
    id: 3,
    title: '營養口乾',
    count: 19
  },
  {
    id: 4,
    title: '巧克球',
    count: 1
  },
]);
//next-line-start
const addItem = () => {
  itemsData.value.push({
    id: new Date().getTime(),
    title: newItem.value,
    count: newCount.value
  })
  newItem.value = '';
  newCount.value = 0;
}
//next-line-end

//next-line-start
const removeItem = (id) => {

}
//next-line-end
</script>
<template>
  <div class="p-6">
    <h1 class="text-4xl mb-10">墨墨雜貨店</h1>
    <section class="mb-2">
      {/* 1.先來做增加 */}
      <h2 class="text-2xl mb-2">AddItem</h2>
      <input type="text" placeholder="請輸入品項" class="border border-1 p-1 rounded-sm" v-model="newItem"/>
{/* 使用 v-model 雙向綁定 */}
      <input
        type="number"
        placeholder="請輸入庫存量"
        class="border border-1 ms-2 p-1 rounded-sm" v-model="newCount"
      />
      //next-line
      <button type="button" class="border border-2 rounded-sm p-1 ms-2" @click="addItem">新增品項</button>
    </section>
    <section class="mt-6">
      {/* 2.接著處理渲染 */}
      <h2 class="text-2xl mb-2">Items</h2>
      <ul v-for="item in itemsData" :key="item.id">
        <li class="flex flex-row py-1">
          <h4>{{ item.title }}</h4>
          <p class="px-4">庫存量：{{ item.count }}</p>
          //next-line
          <button type="button" class="border rounded-sm p-1" @click="item.count --" :disabled="item.count <= 0" :class="{'disabled-color' : item.count <= 0}"> - </button>
          <button type="button" class="border rounded-sm p-1 ms-2" @click="item.count ++"> + </button>
          <button type="button" @click="removeItem(item.id)" class="border rounded-sm px-1 ms-2">刪除</button>
        </li>
      </ul>
    </section>
  </div>
</template>
```

## 流程與步驟

1. 先從 `addItem` 增加品項開始

- 先宣告並綁定名稱、數量變數以及要存放的 data `const newItem = ref('');`、`const newCount = ref(0);`、`const itemsData = ref([])`
- 按鈕也要加上點擊事件 `const addItem = () => {...}`，加上之前每日練習的 `itemsData.value.push()` 將資料寫回

2. 接著處理 `Items` 的畫面渲染，使用 `v-for` 迴圈寫入 `itemsData` 的資料
3. 增加可以修改數量：

- 這裡偷懶直接寫在 inline `@click="item.count ++"`
- 並且加上了如果庫存量少於等於 0 就不可以再點擊 `:disabled="item.count <=0"`
- 以及樣式的判斷 `:class="{'disabled-color' : item.count <= 0}"`

4. 最後加上刪除品項 `const removeItem = () => {...}`

- 先取得要刪除品項的 index ，`.findIndex()`，接著再依 index 刪除 1 筆資料 `.splice(index, 1)`

## 學習知識點

- 很容易忘記要加 `newItem.value`，常常 `newItem` 就送出了
- 這裡 id 使用 `new Date().getTime()`
- 學習了樣式判斷的寫法
- 刪除品項的時候，我下意識覺得直接取得 `id` 來刪除就好了，後來 google 了陣列只認 index 不會知道我們建的 id，所以這裡其實是使用 id 來找到正確的 index

## 後記

:::note
[codepen](https://codepen.io/CloveTseng1026/pen/jEbGBOQ)
:::
