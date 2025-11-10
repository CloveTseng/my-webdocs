---
title: "Map()"
authors: [clove]
---

:::info
此篇適合：正在學習 JavaScript 的人
:::

### Map 是什麼
Map 是 JavaScript ES6 新增的資料結構，用來儲存「鍵值對 (Key-Value pairs)」的集合。與一般物件不同，Map 的 key 可以是任何型別（字串、數字、物件、函式等），而不只是字串。

### Map 與 Object 的差異
| 特性 | Map | Object |
|------|-----|--------|
| Key 的型別 | 可以是任何型別 | 只能是字串或 Symbol |
| 大小 | 使用 `.size` 取得 | 需手動計算 |
| 迭代順序 | 依照插入順序 | ES6+ 有順序，但較複雜 |
| 預設屬性 | 無預設屬性 | 有原型鏈屬性 |
| 效能 | 頻繁增刪時較好 | 較適合靜態資料 |

### Map 怎麼用？

#### 建立 Map
```js
// 建立空的 Map
const myMap = new Map();

// 或建立時就帶入初始值（陣列包陣列格式）
const myMap2 = new Map([
  ['name', 'Alice'],
  ['age', 25],
  [1, 'number key'],
]);
```

**從物件建立 Map**

如果原始資料是物件，需要使用 `Object.entries()` 將物件轉換成「陣列包陣列」的格式：

```js
// 原始資料
const obj = {
  name: 'Alice',
  age: 25,
  city: 'Taipei'
};

// 轉換成陣列包陣列
//next-line
const myMap = new Map(Object.entries(obj));
console.log(myMap);
// Map(3) { 'name' => 'Alice', 'age' => 25, 'city' => 'Taipei' }
```

#### 基本操作

| 方法 | 用途 | 範例連結 |
|------|------|----------|
| `.set(key, value)` | 新增或更新鍵值對 | [範例](#set) |
| `.get(key)` | 取得對應的值 | [範例](#get) |
| `.has(key)` | 檢查 key 是否存在 | [範例](#has) |
| `.delete(key)` | 刪除指定的鍵值對 | [範例](#delete) |
| `.clear()` | 清空所有鍵值對 | [範例](#clear) |
| `.size` | 取得 Map 的大小 | [範例](#size) |
| `.forEach()` / `for...of` / `.entries()` | 遍歷所有鍵值對 | [範例](#foreach) |
| `.keys()` | 取得所有 key | [範例](#keys) |
| `.values()` | 取得所有 value | [範例](#values) |

<a id="set"></a>

**`.set(key, value)` - 新增或更新鍵值對**
```js
const myMap = new Map();
myMap.set('name', 'Alice');
myMap.set('age', 25);
myMap.set(1, 'number key'); // key 可以是數字
myMap.set({ id: 1 }, 'object key'); // key 可以是物件

console.log(myMap);
// Map(4) { 'name' => 'Alice', 'age' => 25, 1 => 'number key', { id: 1 } => 'object key' }
```

<a id="get"></a>

**`.get(key)` - 取得對應的值**
```js
const myMap = new Map();
myMap.set('name', 'Alice');

console.log(myMap.get('name')); // 'Alice'
console.log(myMap.get('notExist')); // undefined
```

<a id="has"></a>

**`.has(key)` - 檢查 key 是否存在**
```js
const myMap = new Map();
myMap.set('name', 'Alice');

console.log(myMap.has('name')); // true
console.log(myMap.has('age')); // false
```

<a id="delete"></a>

**`.delete(key)` - 刪除指定的鍵值對**
```js
const myMap = new Map();
myMap.set('name', 'Alice');
myMap.set('age', 25);

myMap.delete('name');
console.log(myMap.has('name')); // false
```

<a id="clear"></a>

**`.clear()` - 清空所有鍵值對**
```js
const myMap = new Map();
myMap.set('name', 'Alice');
myMap.set('age', 25);

myMap.clear();
console.log(myMap.size); // 0
```

<a id="size"></a>

**`.size` - 取得 Map 的大小**
```js
const myMap = new Map();
myMap.set('name', 'Alice');
myMap.set('age', 25);

console.log(myMap.size); // 2
```

#### 迭代 Map

<a id="foreach"></a>

**遍歷所有鍵值對 - `.forEach()` / `for...of` / `.entries()`**

這三種方式都能遍歷 Map 的所有鍵值對，結果相同，但使用上有差異：

| 方式 | 特點 | 使用時機 |
|------|------|----------|
| `.forEach()` | 方法調用，無法使用 `break`/`continue` | 簡單遍歷，不需要中斷控制 |
| `for...of` (直接遍歷) | 語法結構，可使用 `break`/`continue` | 需要中斷或跳過某些元素 |
| `.entries()` | 明確指定迭代器，等同於直接遍歷 | 程式碼可讀性優先時使用 |

**`.forEach()` - 方法調用**
```js
const myMap = new Map([
  ['name', 'Alice'],
  ['age', 25],
]);

myMap.forEach((value, key) => {
  console.log(key, value);
});
// name Alice
// age 25
```

**`for...of` - 直接遍歷（預設使用 entries）**
```js
const myMap = new Map([
  ['name', 'Alice'],
  ['age', 25],
]);

for (const [key, value] of myMap) {
  console.log(key, value);
}
// name Alice
// age 25
```

**`.entries()` - 明確使用迭代器（等同於直接遍歷）**
```js
const myMap = new Map([
  ['name', 'Alice'],
  ['age', 25],
]);

for (const [key, value] of myMap.entries()) {
  console.log(key, value);
}
// name Alice
// age 25
```

:::tip
一般情況下使用 `for...of` 直接遍歷即可，因為：
- 語法簡潔：`for (const [key, value] of myMap)`
- 可以使用 `break`/`continue` 控制流程
- 效能與 `.entries()` 相同（Map 的預設迭代器就是 entries）
:::

<a id="keys"></a>

**`.keys()` - 取得所有 key**
```js
const myMap = new Map([
  ['name', 'Alice'],
  ['age', 25],
]);

for (const key of myMap.keys()) {
  console.log(key);
}
// name
// age
```

<a id="values"></a>

**`.values()` - 取得所有 value**
```js
const myMap = new Map([
  ['name', 'Alice'],
  ['age', 25],
]);

for (const value of myMap.values()) {
  console.log(value);
}
// Alice
// 25
```


### 實際應用場景

1. 計數器
```js
const countWords = (words) => {
  const wordCount = new Map();
  
  words.forEach(word => {
    wordCount.set(word, (wordCount.get(word) || 0) + 1);
  });
  
  return wordCount;
};

const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
console.log(countWords(words));
// Map(3) { 'apple' => 3, 'banana' => 2, 'orange' => 1 }
```

2. 快取機制
```js
const cache = new Map();

const getCachedData = (key) => {
  if (cache.has(key)) {
    return cache.get(key);
  }
  
  // 模擬取得資料
  const data = `Data for ${key}`;
  cache.set(key, data);
  return data;
};
```

### 練習題
試著練習看看吧~

[LeetCode(easy) - Two Sum
](https://leetcode.com/problems/two-sum/)

:::note
以上內容為個人的理解，如果有什麼想法也歡迎留言跟我分享，讓我可以學習更多。

看更多： [解題思路](../solve-code/07.twosum.md)
:::