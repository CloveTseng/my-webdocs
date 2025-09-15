---
title: v-bind:is
description: 工作時要追求效率，但學習不是
authors: [clove]
tags: [Vue.js, JavaScript]
---
:::note
本站 Vue 的撰寫風格都是 Composition API
:::
:::info
在學習了元件拆分後，可以使用 `v-if` 或 `v-show` 搭配條件來切換顯示，\
但如果條件變多的話，則可以改使用 `is` 來更簡單的處理這個狀況，\
在一轉技能樹中學了 [v-bind](../vue-daily/v-bind) 來處理動態資料，\
所以也可以使用 `v-bind:is` 來處理動態元件。
:::
## 原本的寫法
```jsx
<script setup>
import { ref } from 'vue';
import ComponentA from './ComponentA.vue';
import ComponentB from './ComponentB.vue';

const showComponent = ref('A');
</script>
<template>
  <div>
    <h2>使用 v-if 條件渲染</h2>
    <button @click="showComponent = 'A'">顯示元件 A</button>
    <button @click="showComponent = 'B'">顯示元件 B</button>

    <div v-if="showComponent === 'A'">
      <ComponentA />
    </div>
    <div v-else-if="showComponent === 'B'">
      <ComponentB />
    </div>
  </div>
</template>
```
- 如果條件或是要切換的元件愈來愈多，撰寫及管理上就會變的很麻煩

## 改使用 `:is`
```jsx
<script setup>
import { ref } from 'vue';
import ComponentA from './ComponentA.vue';
import ComponentB from './ComponentB.vue';

const currentComponent = ref('ComponentA');
</script>
<template>
  <div>
    <h2>使用 :is 動態元件</h2>
    <button @click="currentComponent = 'ComponentA'">顯示元件 A</button>
    <button @click="currentComponent = 'ComponentB'">顯示元件 B</button>
    
    <component :is="currentComponent" />
  </div>
</template>
```