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

## 從程式碼來看生命週期

```ts
<script setup>
  import { ref, onMounted, onUpdate, onUnmounted } from 'vue';

  //1. 準備階段 (Creation)
  //vue2 就是 created/beforeCreate
  console.log('1. 備料中')
  const title = ref('生命週期');
  const count = ref(0);
  let timer = null;

  //2. 掛載 (Mounting)
  onMounted(() => {
    console.log('2. 店面開幕，畫面畫好了 (DOM 好了)');

    //模擬 API 請求
    setTimeout(() => {
      console.log('API 資料回來了')
    }, 1000);

    //演示 onUnmounted
    timer = setInterval(() => {
      console.log('計時器執行中…')
    }, 2000)
  })

  //3. 更新(Updating)
  onUpdated(() => {
    console.log('3. 調整軟裝：變更數據重新渲染')
  })

  //4. 卸載(Unmounting)
  onUnmounted(() => {
    console.log('4. 拆店：清除垃圾、計時器')

    //如果沒清，就算元件消失，計時器還是會一直跑
    if (timer) clearInterval(timer);
  })
</script>
<template>
  <div>
    <h2>{{ title }}</h2>
    <p>計數器：{{ count }}</p>
    <button @click="count++">增加數字</button>
  </div>
</template>
```

:::tip
Q：`onUpdated` 什麼時候用的到？\
A：很少用，通常用 `watch` 監聽變數變化，而不是監聽整個畫面的更新
:::