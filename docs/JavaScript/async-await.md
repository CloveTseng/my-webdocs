---
title: "Async / Await 與 Axios"
authors: [clove]
tags: [JavaScript]
---
:::tip
> 這是什麼：讓非同步有了同步的寫法，易讀性更高
:::

## Async / Await
在 Event Loop 提到了非同步的慨念，而 JS 可以使用 Promise 語法來改善非同步的結構，但其實 Promise 撰寫上蠻煩雜的，並且易讀性也比較差。
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
    console.error(error.message);
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

## 小練習
:::info
使用 [JSONPlaceholder](https://jsonplaceholder.typicode.com/) 來練習
:::

### 1. 取得所有貼文
- API 端點： `/posts`
- 任務： 撰寫一個函式 `fetchAllPosts()`，使用 `axios.get()` 取得所有貼文資料 (posts)。
- 要求：
  - 成功時，在 console 中印出取得的資料總數。
  - 使用 `try...catch` 或 `.then().catch()` 處理錯誤，失敗時在 `console` 中印出錯誤訊息。

<details>
<summary>點擊查看解答</summary>

```js
async function fetchAllPosts() {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
    console.log(res.data)
  }catch (error) {
    console.error(error.message)
  }
}
```
</details>

---
### 2. 取得特定使用者貼文（帶參數查詢）
- API 端點： `/posts?userId=1`
- 任務： 撰寫一個函式 `fetchPostsByUser(userId)`，傳入 `userId` (例如 1)，取得該使用者發布的所有貼文。
- 要求：
  - 使用 `params` 選項將 `userId` 作為查詢參數 (Query Parameter) 傳遞給 axios。
  - 成功時，在 `console` 中印出特定使用者貼文的標題列表。

<details>
<summary>點擊查看解答</summary>

```js
async function fetchPostsByUser(userId) {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts', {
      params: {
        userId
      }
    });
    console.log(res.data)
  } catch (error) {
    console.error(error.message)
  }
}
```
</details>

---
### 3. 新增一則貼文（POST）
- API 端點： `/posts`
- 任務： 撰寫一個函式 `createPost(newPostData)`，發送 `POST` 請求來新增一則貼文。
- 要求：
  - `newPostData` 應包含 `title`、`body` 和 `userId` (例如 1)。
  - 成功時，在 console 中印出 API 回傳的新貼文物件（JSONPlaceholder 會回傳新增後的物件，並給予一個新的 `id`）。

<details>
<summary>點擊查看解答</summary>

```js
const newPostData = {
  userId: 10,
  title: "lorem",
  body: "lorem lorem lorem lorem lorem",
}

async function createPost(newPostData) {
  try {
    const res = await axios.post('https://jsonplaceholder.typicode.com/posts', newPostData)
    console.log(res.data)
  } catch (error) {
    console.error(error.message)
  }
}
```
</details>

---
### 4. 更新特定貼文標題（PATCH/PUT)
- API 端點： `/posts/1` (假設更新 id 為 1 的貼文)
- 任務： 撰寫一個函式 `updatePostTitle(postId, newTitle)`，使用 `axios.patch()` 僅更新特定貼文 (例如 `id: 1`) 的 `title` 欄位。
- 要求：
  - 傳送只包含 `{ title: newTitle }` 的資料。
  - 成功時，在 `console` 中印出 API 回傳的已更新貼文物件。

<details>
<summary>點擊查看解答</summary>

```js
async function updatePostTitle(postId, newTitle) {
  const patchData = {
    title: newTitle
  }
  try {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    const res = await axios.patch(url, patchData)
    console.log(res.data.title)
  } catch (error) {
    console.error(error.message)
  }
} 
```
</details>

---
### 5. 刪除特定貼文（DELETE)
- API 端點： `/posts/1`
- 任務： 撰寫一個函式 `deletePost(postId)`，發送 `DELETE` 請求來刪除特定貼文 (例如 `id: 1`)。
- 要求：
  - 成功時，在 `console` 中印出一個訊息，例如：`「Post with ID {postId} has been deleted.」`（通常 DELETE 成功回傳 200 OK 且內容為空物件）。

<details>
<summary>點擊查看解答</summary>

```js
async function deletePost(postId) {
 try {
   const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
   const res = await axios.delete(url);
   console.log(`Post with ID ${postId} has been deleted.`)
 } catch (error) {
    console.error(error.message)
  }
}
```
</details>

---

:::note
- 本篇參照卡斯伯老師的 [Async function / Await 深度介紹](https://www.casper.tw/development/2020/10/16/async-await/#Promise-%E8%88%87-async-await)
- [axios github](https://github.com/axios/axios)
> 回頭了解非同步慨念：[Event Loop 事件循環](./event-loop.md)
:::