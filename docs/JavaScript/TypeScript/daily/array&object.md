---
title: Day 4 - 陣列與物件
description: 2025 TypeScript 實戰課，一天學一點積沙成塔
tags: [Vue.js, JavaScript]
image: /blog/ts-daily4.png
---

> 2025 TypeScript 實戰課，一天學一點積沙成塔

:::info Topic
第一大題：選擇題\
第二大題：實作
:::

## 大題一：選擇題
1. 在 TypeScript 中，以下哪個是正確宣告數字陣列的方式？
   - A. `let numbers = [1, 2, 3];`
   - B. `let numbers: number[] = [1, 2, 3];`
   - C. `let numbers: Array = [1, 2, 3];`
   - D. `let numbers: [number] = [1, 2, 3];`

2. 以下哪種方法可以用來向 TypeScript 陣列中添加新元素？
   - A. append()
   - B. push()
   - C. add()
   - D. insert()

3. 如何宣告一個包含字串和數字的 TypeScript 陣列？
   - A. `let values: [string, number] = ["Hello", 5];`
   - B. `let values: (string | number)[] = ["Hello", 5];`
   - C. `let values: Array<string, number> = ["Hello", 5];`
   - D. `let values: string & number[] = ["Hello", 5];`

4. 在 TypeScript 中，pop() 方法的用途是什麼？
   - A. 刪除陣列的第一個元素。
   - B. 刪除陣列的最後一個元素。
   - C. 在陣列的開頭添加一個元素。
   - D. 在陣列的末尾添加一個元素。

5. 以下哪個是 TypeScript 中宣告多維陣列的正確方式？
   - A. `let matrix: number[][] = [[1, 2], [3, 4]];`
   - B. `let matrix: Array<number> = [[1, 2], [3, 4]];`
   - C. `let matrix: number[] = [[1, 2], [3, 4]];`
   - D. `let matrix: [number, number][] = [[1, 2], [3, 4]];`

<details>
<summary>點擊查看解答</summary>

- B. `let numbers: number[] = [1, 2, 3];`
- B. push()
- B. `let values: (string | number)[] = ["Hello", 5];`
- B. 刪除陣列的最後一個元素。
- A. `let matrix: number[][] = [[1, 2], [3, 4]];`
</details>

## 大題二：實作題
1. 寫一個 calculateSum 函式，該函式接受一個數字陣列作為參數並回傳它們的總和。
2. 定義一個 TUser 型別，為一個由物件組成的陣列，物件中的屬性包含：id 為數字型別、name 為字串型別、address 為可選屬性，內容是字串型別或 null。/
   創建一個 user 陣列帶入任意資料以符合該型別定義。
3. 寫一個 mergeArrays 函式， 來合併兩個相同型別的字串陣列，並回傳一個包含兩個陣列所有元素的新陣列。

```ts

//第一題
type TCalculateSum = (numbers: number[]) => number;
const calculateSum : TCalculateSum = (numbers) => {
    return numbers.reduce((accumulator, item) => accumulator + item,0)
}

//第二題
type TUser = {
    id: number;
    name: string;
    address?: string | null;
}

const UserList: TUser[] = [
    {
        id: 1,
        name: "Clove",
        address: "123 Maple Street, Springfield, IL 62704"
    },
    {
        id: 2,
        name: "Ted",
        address: "456 Oak Avenue, Suite 200, Metropolis, NY 10012"
    },
    {
        id: 3,
        name: "MoMo"
    }
]

//第三題
type TMergeArrays = (arr1: string[], arr2: string[]) => string[];
const mergeArrays: TMergeArrays = (arr1, arr2) => {
    return [...arr1, ...arr2];
}
```

---

:::note
回到[每日任務列表](../daily.md)
:::