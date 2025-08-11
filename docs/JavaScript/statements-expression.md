---
title: "陳述式 vs 表達式"
authors: [clove]
---
:::tip
> 這是什麼：兩種定義函式的方式，我個人常用的是`表達式`
:::

## 比較表
| 特性            | 函式陳述式 (Function Statements)            | 函式表達式 (Function Expression)                              |
| ------------- | -------------------------------------- | -------------------------------------------------------- |
| 快速辨認法         | 不會回傳值                                  | 一定會回傳值                                                   |
| 是否需要名稱        | 必須具名                                   | 可匿名或具名                                                   |
| 提升 (Hoisting) | 是                                      | 否                                                        |
| 呼叫時機          | 可在宣告之前                                 | 必須在宣告之後                                                  |
| 使用場景          | 適合遞迴、需提前呼叫的情況                          | 適合回呼、動態分配邏輯                                              |
| 例             | `var`,`if`, `for`, `function foo() {}` | `1+2`, `const a = function() {}`, `() => {}`, `三元`, `&&` |
| JSX           | ❌                                      | ✅只能用表達式                                                  |

---
## 陳述式 (Function Statements)
- 適合需要提前使用函式的情況，例如初始化邏輯或全域函式。
### JS 實例
- 宣告了一個函式，本身是執行的語句，不是值
```js
function green() {
	console.log("Hello, World!");
}

green();
```
### React 實例
> 可以寫在例如 `useEffect` 裡(因為就是一般的 JS 函式)，但在❌ JSX 裡不能寫陳述式👹

```js
useEffect(() => {
	if (condition) {
		console.log('可以寫唷');
	}
},[]);
```
---
## 表達式 (Function Expression)
- 靈活性高：適合用在需要立即執行、 callback或避免提升的情況
### JS 實例
- `function() {}` 被當成是值賦予給 `green`
```js
const green = function() {
	console.log("Hello, World!");
};

green()
```
### React 實例
```jsx
function App() {
	const isLoggedIn = true;

	return (
		<div>
			{isLoggedIn ? <p>歡迎回來</p> : <p>請先登入</p>}
			{isLoggedIn && <p>歡迎回來</p>}
		</div>
	)
}
```
---
## React 陳述式 vs 表達式：小測驗

請判斷下面程式碼裡 `{}` 內是：
- A. 陳述式 (Statement)
- B. 表達式 (Expression)
### 第 1 題

```jsx
{ items.map(item => <li>{item}</li>) }
```
### 第 2 題
```jsx
{
  (() => <p>立即執行函式！</p>)()
}
```
### 第 3 題
```jsx
{
  for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
  }
}
```
### 第 4 題
```jsx
{ showMessage() }
```
### 第 5 題
```jsx
{
  const total = items.reduce((sum, item) => sum + item.price, 0);
  <p>總價：{total}</p>;
}
```
---
| 題號 | 答案 | 解釋 |
| --- | --- | --- |
|第 1 題|**B**|`map` 是表達式，回傳新陣列 (JSX 元素陣列)，可以放 JSX 裡。|
|第 2 題|**B**|IIFE (立即執行函式表達式)，屬於表達式，JSX 裡可以用。|
|第 3 題|**A**|`for` 是陳述式，JSX 裡不能用。|
|第 4 題|**B**|函式調用是表達式，回傳值會被渲染。|
|第 5 題|**A**|`const` 宣告是陳述式，不能寫在 JSX 裡。|
