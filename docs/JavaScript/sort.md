---
title: ".sort()"
authors: [clove]
---

:::tip
將陣列進行排序
:::
:::info
此篇適合：正在學習 JavaScript 的人
:::
> 面試題：JavaScript 中的 sort 傳入 (a,b) => b - a 會是升序還是降序？為什麼呢？

### sort 是什麼
在 JavaScript 中，如果需要將陣列進行排序可以使用方便的 `.sort()` 來達成

### sort 怎麼用？
在文件中關於 sort 的語法會寫到 
```js
arr.sort(compareFunction);
```
**使用注意事項：**
- compareFunction 非必填
`雖然是非必填，但如果你真的不填，他就給你亂排www(依預設排序方式)`
- 會改變原陣列

所以通常來說會在 `compareFunction` 填入兩個參數(a, b)，並且回傳這兩個數比大小後的值來進行排序的規則，規則為：
```js
if (a > b) {
  return 1;
}
幫我將 b 排在 a 前面
```
```js
if (a < b) {
  return -1;
}
幫我將 a 排在 b 前面
```
```js
a 等同 b
return 0 
位置不變
```

依上面的規則就會將 compareFunction 寫成 `(a, b) => b - a`，將陣列從大排到小；
反之，如果要從小排到大就會寫成 `(a, b) => a - b`

```js
let arr = [56, 23, 43, 34, 1, 10];
arr.sort((a, b) => b - a);

//[56, 43, 34, 23, 10, 1] 降序的排列方式
```
**逐條說明：**
- 我們看陣列的第一跟第二個值： 
a=56
b=23
b - a 小於 0，回傳 -1，對照上面規則將 a 放在 b 前面，此時為：56,23,...
- 接著比對：
a=23
b=43
b - a 大於 0，回傳 1，對照規則將 b 排在 a 前面，此時為：56, 43, 23,...

最後排完就會從大到小的排序方式。

### 練習題
在 codewars 有一題要求將 Input 的值依大到小排序再回傳，就會用到 sort 的觀念
![descending-order](https://firebasestorage.googleapis.com/v0/b/mobaocoffee.appspot.com/o/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2%202025-04-17%20151335.png?alt=media&token=63a732d7-33cf-4dcd-be41-897a6584e8eb)

試著練習看看吧~

[codewars(7kyu) - Descending Order
](https://www.codewars.com/kata/5467e4d82edf8bbf40000155)

:::note
以上內容為個人的理解，如果有什麼想法也歡迎留言跟我分享，讓我可以學習更多。
:::