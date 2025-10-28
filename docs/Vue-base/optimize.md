---
title: 優化 Vue.js 的效能
description: 工作時要追求效率，但學習不是
authors: [clove]
tags: [Vue.js, JavaScript]
---
:::note
本站 Vue 的撰寫風格都是 Composition API
:::
:::info
筆記參考至 [How to Optimize Performance in Vue.js Applications: Beginner to Advanced Guide
](https://dev.to/delia_code/how-to-optimize-performance-in-vuejs-applications-beginner-to-advanced-guide-53db)
:::

## 基本優化
### Lazy Loading Components | 延遲載入元件
一次載入所有元件跟頁面，會造成整個頁面初次渲染時間延長並且影響使用者操作體驗，所以需要 Lazy Loading Components 來解決這個問題

原本的寫法無論是否使用，都會全部打包到主檔案中

```jsx
import Home from '../views/Home.vue';
```

改使用 Lazy Loading 寫法，在使用者到該頁面的時候才載入

```jsx
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutPage.vue')
  }
]
```

### `v-if` 與 `v-show` 的選擇使用
- `v-if` ：依條件渲染必要條件元件，會在 DOM 中新增或刪除元件
- `v-show` ： `true` 跟 `false` 的切換顯示，在一開始頁面載入時會全部渲染出來

如果是需要頻繁切換的功能，不停的新增或刪除元件會影響效能

## 中級優化
### Debouncing and Throttling | 防抖與節流
- 防抖：連續觸發事件時，只執行最後一次 (例：搜尋框輸入、視窗縮放)
- 節流：固定的時間間隔內，只執行一次 (例：滾動、滑鼠移動)

```jsx
<script setup>
  import { ref } from 'vue';
  import { useDebounce } from '../composables/useDebounce';

  const searchText = ref('');
  const loading = ref(false);
  const latestQuery = ref('');

  const performSearch = (query) => {
    if (!query) return;

    loading.value = true;
    latestQuery.value = query;
  }

  const handleInput = useDebounce(() => {
    performSearch(searchText.value)
  },500)
</script>
```

### Using Reactive References Wisely | 明智的使用響應式引用

- 這個例子過度的計算，造成效能的浪費
```jsx
<script setup>
  import { ref } from 'vue';

  const items = ref([1, 2, 3, 4, 5]);
  const eventItems = items.value.filter(item => item % 2 === 0);
</script>
```

- 有效的使用 `computed` 只在 items 的值有變化時才計算，而不在每一次重新渲染時就跑計算
```jsx
<script setup>
  import { ref, computed } from 'vue';

  const items = ref([1, 2, 3, 4, 5]);
  const eventItems = computed(() => items.value.filter(item = item % 2 === 0))

</script>
```

## 進階優化
### Virtual Scrolling | 虛擬滾動
在滾動大型列表或是長列表時，使用虛擬滾動來渲染部份可視項目來提升效能

- 這個只顯示部份項目，減少 DOM 的負擔並提高效能
```jsx
<template>
  <virtual-list :size="50" :remain="10" :items="items">
    <template v-slot="{ item }">
      <div class="item">{{ item }}</div>
    </template>
  </virtual-list>
</template>

<script setup>
  import { ref } from 'vue';
  import VirtualList from 'vue-virtual-scroll-list'; 

  const items = ref([...Array(1000).keys()]);
</script>

<style scoped>
.item {
  height: 50px;
  line-height: 50px;
  padding: 0 10px;
  border-bottom: 1px solid #eee;
  background: #f8f8f8;
}
</style>
```

### Code Splitting and Bundling | 程式碼分割與打包
- 打包：將許多的 JavaScript 打包成一個大檔案後再發出請求
- 程式碼分割：為了優化初次載入及啟動時間，打包工具會將程式碼拆成多個小檔案

### Server-Side Rendering (SSR) | 伺服器渲染(SSR)
可以考慮將 SSR 與 Nuxt.js 結合使用，以縮短載入時間並提升 SEO

### Performance Monitoring | 效能監控
使用效能監控工具來定期監控效能
- Vue Devtools
- Lighthouse
- Webpack Bundle Analyzer
