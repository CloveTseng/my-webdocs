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
<<<<<<< Updated upstream
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++;
    }
  }
}
=======
  export 
>>>>>>> Stashed changes
</script>

<template>
  <button @click="increment">{{ count }}</button>
</template>
```

### Composition

- 要加上 `setup`

```js
<script setup>
import { ref } from 'vue'

const count = ref(0);

const increment = () => {
  count.value++;
}
</script>

<template>
  <button @click="increment">{{ count }}</button>
</template>
```
:::note
回到[Vue3 必學知識點](/docs/Vue-base/intro)列表
:::