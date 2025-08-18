---
title: "= 、 == 和 === 的差別？"
authors: [clove]
tags: [JavaScript]
---
:::tip
> 這是什麼：了解在 JS 中各種『等於』的用法
:::

在 JavaScript 中很常見到三種型式的等於，到底有什麼差別？

## = | 賦值
我覺得這個是一開始學的時候最容易搞錯的，例如一開始學的時候會接觸到宣告：
```js
let count = 1;
```
文件都會說這個等於叫『賦值』，嗯!很好理解，但是接著就會發生這種狀況：
```js
let count = 10;

if (count = 5){
  console.log('執行了這個 if')
}
```
初學時會想說：
- count 被賦值 10
- 如果 count『等於』5，才會印出結果
- 10 不等於 5 所以不會印出結果

最終反而印出了『執行了這個 if』，然後就會滿頭問號 (其實我在解題的時候也犯過這個錯誤)

這裡的 `count = 5` 也是賦值，所以此時 `count` 變成了 5，所以判斷為 `true` 就會印出結果。

這就是初學時在寫判斷式時，最常把 `=` 誤用為 `==` 或 `===` 的地方。

## == | 寬鬆的等於
`==` 才是用來比較兩個值的『等於』，但會自動進行型別轉換而造成有時候找不到錯誤的問題點：
```js
console.log(5 == '5');  // true，字串 '5' 被轉換成數字 5
console.log(null == undefined); // true
console.log(0 == false);    // true，boolean 值 false 被轉換成數字 0
```

## === | 嚴格的等於
`===` 會進行兩種比較：
- 值的比較：兩個值是否相等
- 型別的比較：兩個值的型別是否相等
如果都相等，才會為 `true` ，避免了使用 `==` 時的自動轉換型別狀況
```js
console.log(5 === '5');  // false，雖然值都是 5，但型別不同
console.log(null === undefined); // false
console.log(0 === false);    // false
```
