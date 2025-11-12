---
title: 'v-on 與 v-bind 的區別'
description: 工作時要追求效率，但學習不是
authors: [clove]
tags: [Vue.js]
---

## `v-on` 與 `v-bind` 差異表

| 指令 | 完整寫法 | 簡寫 | 作用 |
| :--- | :--- | :--- | :--- |
| `v-bind` | `v-bind:attribute` | `:attribute` | 單向綁定：將資料綁定到屬性/組件 |
| `v-on` | `v-on:event` | `@event` | 事件監聽：用於監聽 DOM 事件或組件發出的自訂事件，並執行 |

## 實作範例
> 建立一個 `<Counter>` 元件，使用 `v-bind` 來設定按鈕屬性，使用 `v-on` 來綁定事件

```js
<script setup>
  import {ref, computed } from 'vue';
  
  const count = ref(0);
  const buttonDisabled = ref(false);
  
  const buttonText = computed(() => {
    return `點擊次數： ${count.value}`;
  })
  const increment = () => {
    count.value++;
    if (count.value >= 5) {
      buttonDisabled.value = true;
    }
  }
</script>

<template>
<div class="counter-container">
  <p>只能點 5 次</p>
  //next-line
  <button :disabled="buttonDisabled" :title="`當前計數： ${count}`" @click="increment" :class="{ 'is-disabled': buttonDisabled }">{{ buttonText }}</button>
  <p>目前狀態: {{ buttonDisabled ? '已禁用' : '可點擊' }}</p>
</div>
</template>
```

:::info
荊 [Codepen](https://codepen.io/CloveTseng1026/pen/xbVbgbv)
:::
:::note
回到[Vue3 必學知識點](/docs/Vue-base/intro)列表
:::