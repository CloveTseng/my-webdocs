---
title: 'options vs composition'
description: 工作時要追求效率，但學習不是
authors: [clove]
tags: [Vue.js]
---

## Options vs Composition 寫法的差異 (SFC)

### Options

```js
<script>
export default {
  data() {
    return {
      titleClass: 'title'
    }
  }
}
</script>

<template>
  <h1>Make me red</h1> <!-- add dynamic class binding here -->
</template>
```

### Composition

- 要加上 `setup`

```js
<script setup>
import { ref } from 'vue'

const titleClass = ref('title')
</script>

<template>
  <h1>Make me red</h1> <!-- add dynamic class binding here -->
</template>
```
