---
title: "取得今天日期在今年是第幾週"
authors: [clove]
tags: [JavaScript, solving]
unlisted: true
---
:::note
為個人思考的思緒紀錄，可能有更優解法，歡迎指教討論共好
:::

:::tip[Topic]
取得今天日期在今年是第幾週
:::

## 思考問題
1. 取得今天的日期
2. 取得今年的第一天
3. 將兩個日期相減
4. 因為 date 的最小單位是毫秒，要先換算成天數，並且將相減的數值換算成相差的天數
5. 將這個天數 / 7 取得週數

## 列出步驟
1. SET today (new Date)
2. SET startOfYear (.getFullYear, 0, 1)
3. SET diff point.1 reduce point.2
4. SET todayOfYear (Math.floor) PLUS 1
5. todayOfYear DIVIDED by 7

# Solve
```js
const today = new Date();
const startOfYear = new Date(today.getFullYear(), 0, 1); 
const diff = today - startOfYear;

const oneDay = 1000 * 60 * 60 * 24;

const todayOfYear = Math.floor( diff / oneDay ) + 1;
const todayWeekNumber = Math.ceil(todayOfYear / 7); 
console.log(`今天是第 ${todayWeekNumber} 週`);
```

## 反思與優化
- 知道 `new Date()` 但其實一直沒有仔細去了解詳細的用法