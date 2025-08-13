---
title: "處理陣列的方法"
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
    type: 'apple',
    count: 3
  },
  {
    type: 'banana',
    count: 6
  },
  {
    type: 'blueberry',
    count: 9
  },
  {
    type: 'orange',
    count: 1
  },
]
```

## `array.push()`
| 在陣列的最後一筆加上資料
```js
const newFruit = {
  type: 'grape',
  count: 5
}
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
  "type": "apple",
  "count": 3
},
{
  "type": "banana",
  "count": 6
},
{
  "type": "blueberry",
  "count": 9
}]
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
  "type": "banana",
  "count": 6
},
{
  "type": "blueberry",
  "count": 9
},
{
  "type": "orange",
  "count": 1
}]
```
---