---
title: '處理陣列的方法'
authors: [clove]
tags: [JavaScript]
---

:::tip
這裡匯總常用處理陣列的方法
:::
:::note
不定期更新中
:::

- [.sort()](./sort.md)

陣列

```js
const arrayData = [
  {
    id: 1,
    type: 'apple',
    count: 3,
  },
  {
    id: 2,
    type: 'banana',
    count: 6,
  },
  {
    id: 3,
    type: 'blueberry',
    count: 9,
  },
  {
    id: 4,
    type: 'orange',
    count: 1,
  },
];
```

## `array.push()`

| 在陣列的最後一筆加上資料

```js
const newFruit = {
  id: 5,
  type: 'grape',
  count: 5,
};
arrayData.push(newFruit);
```

---

## `.pop()`

| 移除陣列的最後一筆 (結尾)

```js
const removePopData = arrayData.pop();
console.log(arrayData);
```

Result

```js
// [object Array] (3)
[
  {
    id: 1,
    type: 'apple',
    count: 3,
  },
  {
    id: 2,
    type: 'banana',
    count: 6,
  },
  {
    id: 3,
    type: 'blueberry',
    count: 9,
  },
];
```

---

## `.shift()`

| 移除陣列的第一筆 (開頭)

- 移除並回傳(會回傳移除的元素)
- 處理先進先出 (FIFO) 很好用 (queue)

```js
const removePopData = arrayData.shift();
console.log(arrayData);
```

Result

```js
// [object Array] (3)
[
  {
    id: 2,
    type: 'banana',
    count: 6,
  },
  {
    id: 3,
    type: 'blueberry',
    count: 9,
  },
  {
    id: 4,
    type: 'orange',
    count: 1,
  },
];
```

---

## `.splice(index, x)` & `.findIndex()`

| 移除陣列指定索引以及筆數

- 是透過 id 來找到正確的位置(index)，而不是直接使用 id 來刪除資料

```js
const isBanana = 2;
const findBananaIndex = arrayData.findIndex((item) => item.id === isBanana);
const deleteBanana = arrayData.splice(findBananaIndex, 1);
console.log(arrayData);
```

Result

```js
[
  {
    id: 1,
    type: 'apple',
    count: 3,
  },
  {
    id: 3,
    type: 'blueberry',
    count: 9,
  },
  {
    id: 4,
    type: 'orange',
    count: 1,
  },
];
```

---
