---
title: "Async / Await 與 Axios"
authors: [clove]
tags: [JavaScript]
---
:::tip
> 這是什麼：讓非同步有了同步的寫法，易讀性更高
:::

## Async / Await
前面提到了非同步的慨念，而 JS 可以使用 Promise 語法來改善非同步的結構，但其實 Promise 撰寫上蠻煩雜的，並且易讀性也比較差。
所以可以使用 async / await 來簡化 Promise 撰寫出看起來像同步的非同步代碼：
- 這裡會先宣告一個 async 的 function，告訴大家：這裡要跑非同步了哦!
- 而 async 裡面就會使用 await (如名稱所說 await 暫停)，直到回傳再繼續往下執行 

```js
async function getApiData() {
  try {
    const res = await fetch(`${BASE}/api/api_path/products`);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
```

## async/await 我懂了，但 Axios 是什麼？
| Axios 是一個基於 Promise 簡化 HTTP 請求與處理回應的套件

使用 axios 的話就不需要再把資料轉成 JSON 格式 `response.json()` 或 `POST` 時將 JSON 轉為字串 `JSON.stringify()`，axios 都幫你處理好啦~是不是好快樂

### 怎麼用？
安裝：
```js
npm install axios
```
導入：
```js
import axios from 'axios';
```
`.get` 請求：(取得 data)
```js
async function getUser() {
  try {
    const response = await axios.get('https://api.example.com/data');
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
```
`.post` 請求：(增加一筆 data)
```js
const newUser = { name: 'Happy zoe', age: 23}
async function postData() {
  try {
    const response = await axios.post('https://api/example.com/users/1', newUser);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}
```

:::note
- 本篇參照卡斯伯老師的 [Async function / Await 深度介紹](https://www.casper.tw/development/2020/10/16/async-await/#Promise-%E8%88%87-async-await)
- [axios github](https://github.com/axios/axios)
> 回頭了解非同步慨念：[Event Loop 事件循環](./event-loop.md)
:::