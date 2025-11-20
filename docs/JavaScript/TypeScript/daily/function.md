---
title: Day 3 - 函式
description: 2025 TypeScript 實戰課，一天學一點積沙成塔
tags: [Vue.js, JavaScript]
image: /blog/ts-daily3.png
---

> 2025 TypeScript 實戰課，一天學一點積沙成塔

:::info Topic
第一大題：選擇題\
第二大題：實作
:::

## 大題一：選擇題
1. TypeScript 中，函式陳述式的主要特點是什麼？
   - A. 可以被賦值給變數
   - B. 必須要有函式名稱
   - C. 都必須要回傳 void
   - D. 不可以有回傳值
2. 在 TypeScript 中，函式參數的型別註釋主要作用是什麼？
   - A. 指定函式執行的時間
   - B. 定義函式的參數和回傳值的型別
   - C. 確定函式的名稱
   - D. 調整函式的性能
3. 以下哪個選項正確定義了一個 TypeScript 函式，該函式接受兩個 number 類型的參數並回傳一個 number？
   - A. `function add(x, y) { return x + y; }`
   - B. `const add = (x: number, y: number): number => x + y;`
   - C. `let add = function(x, y) { return x + y; }`
   - D. `add(x: number, y: number): number { return x + y; }`
4. 如果一個 TypeScript 函式不回傳任何值，它的回傳型別應該是什麼？
   - A. number
   - B. string
   - C. void
   - D. boolean

<details>
<summary>點擊查看解答</summary>

- B. 必須要有函式名稱
- B. 定義函式的參數和回傳值的型別
- B. `const add = (x: number, y: number): number => x + y;`
- C. void
</details>

## 大題二：實作題
> 1. 設計一個 concatStrings 函式並使用函式陳述式，使函式能接收兩個 string 型別的參數，並將它們連接起來。
> 2. 定義一個 TMathNumber 型別，並設計 multiply 和 divide 兩個函式分別回傳兩個數字相乘和相除的結果，使用箭頭函式來設計以符合函式表達式以及 TMathNumber 型別格式。
> 3. 設計一個函式 isGreaterThanTen 函式陳述式，設計一個 number 型別的參數，並檢查該數字是否大於 10，回傳 boolean 值。

```ts
//第一題
function concatStrings(s1:string, s2:string):string {
   return s1 + s2
}

//第二題
type TMathNumber = (n1: number, n2: number) => number;
const multiply:TMathNumber = (n1, n2) => {
    return n1 * n2;
}
const divide:TMathNumber = (n1, n2) => {
    return n1 / n2;
}

//第三題
function isGreaterThanTen(n3: number): boolean {
    return n3 > 10;
}
```

## 思考與反饋
- 今天是函式的學習

---

:::note
回到[每日任務列表](../daily.md)
:::