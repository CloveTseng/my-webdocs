---
title: Day 1 - 原始型別、型別註釋、型別推斷
description: 2025 TypeScript 實戰課，一天學一點積沙成塔
tags: [Vue.js, JavaScript]
image: /blog/ts-daily2.png
---

> 2025 TypeScript 實戰課，一天學一點積沙成塔

:::info Topic
第一大題：選擇題\
第二大題：實作
:::

## 大題一：選擇題
1. 型別註釋是強制一定要加上的嗎？
   - A. 是
   - B. 否
2. 型別推斷基於什麼來推斷變數的型別？
   - A. 初始值
   - B. 函式參數
3. 型別推斷可以幫助我們省略哪些型別註釋？
   - A. 字串型別註釋
   - B. 數字型別註釋
   - C. 函式型別註釋
   - D. 所有型別註釋
4. 下列哪一個宣告會導致 TypeScript 報錯？
    ```ts
    A. const name: string = "Andy";
    B. const age = 25;
    C. const isActive: boolean = "true";
    D. const isCompleted: any = false;
    ```
5. 若宣告 let speed = 10; ，TypeScript 會自動推斷 speed 的型別是？
   - A. string
   - B. number
   - C. boolean

<details>
<summary>點擊查看解答</summary>

- B. 否
- A. 初始值
- D. 所有型別註釋
- C. `const isActive: boolean = "true";`
- B. number
</details>

## 大題二：TypeScript 環境安裝與教學
> 1. 請使用型別註釋宣告一個變數 fullName，並將其設置為字串型別，初始值為你的姓名。
> 2. 請使用型別推斷宣告一個變數 score，並將其設置為數字型別，初始值為 80。
> 3. 將下列程式修改成能夠正確執行：
```ts
let age;
age = "25";
console.log(age + 5); // 該行維持不變
```

<details>
<summary>點擊查看解答</summary>

第一題：
```ts
const fullName: string = "Clove";
```
第二題：
```ts
const score = 80;
```
```ts
let age: number;
age = 25;
console.log(age + 5);

```
</details>

## 思考與反饋
- 開始學習各種定義型別的方式

---

:::note
回到[每日任務列表](../daily.md)
:::