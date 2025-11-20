---
title: 'TypeScript 實戰班：主線任務一'
authors: [clove]
tags: [TypeScript]
---

> 完成條件：
> 1. 完成 main.ts 的 10 道題目
> 2. 確保所有 TS Lint 錯誤提示皆有消除

## 題目一：變數宣告型別定義
> 說明：請為以下變數補上正確型別（數字、字串、布林、字串陣列、帶型別的物件）。\
> 目標：能直接通過型別檢查與基本值檢查。

```ts
export const plantId /* TODO: 型別 */ = 101;
export const plantName /* TODO: 型別 */ = "琴葉榕（Fiddle Leaf Fig）";
export const isAvailable /* TODO: 型別 */ = true;
export const tags /* TODO: 型別 */ = ["大型植栽", "室內明亮散射光"];
export const plant /* TODO: 物件型別 */ = { id: 101, name: "琴葉榕", price: 2500 };
export const cart /* TODO: 陣列包物件的型別定義 > */ = [
  { sku: "PLANT-1001", name: "虎尾蘭", qty: 2, price: 480 },
  { sku: "PLANT-2001", name: "龜背芋", qty: 1, price: 1200, potColor: "白" },
];
```
<details>
<summary>點擊查看解答</summary>

```ts

```
</details>

## 題目二：Enum（定義 & 反向映射）
> 說明：請定義 PlantCategory Enum，並示範反向映射。\
> 目標：理解 Enum 定義與反向映射的寫法。
```ts
export enum PlantCategory {
  
}
export const catKeyName: string = PlantCategory[/* TODO: 取得 LargePlant 的數值 */ 0];
```
<details>
<summary>點擊查看解答</summary>

```ts

```
</details>

## 題目三：type（& 組合）
> 說明：請用 type 定義 BasicPlant 與 StockInfo，再用 & 組合為 OnShelfPlant，建立範例變數。
> 目標：理解 type 宣告與交叉型別的寫法。

```ts
export type BasicPlant = /* TODO: { id: 型別; name: 型別; price: 型別 } */ any;
export type StockInfo = /* TODO: { sku: 型別; quantity: 型別 } */ any;
export type OnShelfPlant = /* TODO: BasicPlant, StockInfo 組合 */ any;

export const snakePlant /* TODO: OnShelfPlant */ = {
  id: 2,
  name: "虎尾蘭",
  price: 480,
  sku: "PLANT-1001",
  quantity: 42,
};
```
<details>
<summary>點擊查看解答</summary>

```ts

```
</details>

## 題目四：interface（extends 組合）
> 說明：定義 Price 與 Shippable，PlantItem 需 extends 兩者並包含 id/name。\
> 目標：理解介面擴充多重介面的寫法。
```ts
export interface Price { /* TODO: price: 型別; currency:"TWD"|"USD" */ }
export interface Shippable { /* TODO: weightKg: 型別; shipFrom: 型別 */ }
// export interface PlantItem 組合 Price, Shippable 並包含 id/name

export const fiddleLeafFig /* TODO: PlantItem */ = {
  id: 101,
  name: "琴葉榕",
  price: 2500,
  currency: "TWD",
  weightKg: 8.2,
  shipFrom: "Taipei",
};
```
<details>
<summary>點擊查看解答</summary>

```ts

```
</details>

## 題目五：函式定義（以 type 標註參數與回傳）
> 說明：定義 CalcTotalFn，計算 items 小計，若有 coupon 則折抵（percent/cash）。\
> 目標：以 type 定義函式型別並實作。

```ts
export type CartItem = { price: number; qty: number };
export type Coupon = { type: "percent" | "cash"; amount: number };
export type CalcTotalFn = /* TODO: (參數型別) => 型別 */ any;

export const calcTotal /* TODO: CalcTotalFn */ = (items, coupon) => {
  const subtotal = items.reduce((sum, it) => sum + it.price * it.qty, 0);
  if (!coupon) return subtotal; 
  if (coupon.type === "percent") return Math.max(0, Math.round(subtotal * (1 - coupon.amount / 100)));
  return Math.max(0, subtotal - coupon.amount);
};
```
<details>
<summary>點擊查看解答</summary>

```ts

```
</details>

## 題目六：Generics + API 應用（使用 axios）
> 說明：import axios 與 AxiosResponse，定義 PlantDTO，實作 fetchPlants。\
> API: `https://fakestoreapi.com/products`\
> 目標：理解泛型定義與應用。

```ts
import axios from 'axios'; /* TODO */
export type PlantDTO = { 
  id: number; 
  title: string; 
  price: number; 
  category: string; 
};

export const fetchPlants = async () /* TODO */ => {
  return axios.get('https://fakestoreapi.com/products');
}
```
<details>
<summary>點擊查看解答</summary>

```ts

```
</details>

## 題目七：Required、Partial
> 說明：updatePlant(input) 接受部分更新，實際回傳需是 `Required<PlantBase>`。\
> 目標：掌握 Partial/Required 的互補與回傳保證。

```ts
export type PlantBase = { id: number; name: string; price: number; description?: string };

export function updatePlant(input: /* TODO */ any): /* TODO */ any {
  const existing: /* TODO */ any = { id: 1, name: "虎尾蘭", price: 480, description: "耐陰、淨化空氣" };
  const merged = { ...existing, ...input };
  return {
    id: merged.id,
    name: merged.name,
    price: merged.price,
    description: merged.description ?? "",
  };
}
```
<details>
<summary>點擊查看解答</summary>

```ts

```
</details>

## 題目八：Record
> 說明：用 Record 表示庫存表。\
> 目標：以字串鍵對應到嚴格結構。

```ts
export type Inventory = /* TODO */ any;
export const inventory /* TODO */ = {
  "PLANT-1001": 42,
  "PLANT-2001": 8,
};
```
<details>
<summary>點擊查看解答</summary>

```ts

```
</details>

## 題目九：Pick、Omit
> 說明：type PlantItem 由第四題定義，請用 Pick/Omit 建立兩個新型別。\
> 目標：理解 Pick/Omit 的用法與差異。\
> 需求：
> 1) CartPlant：只需 id/name/price\
> 2) PublicPlant：移除重量與出貨地

```ts
export type CartPlant = /* TODO */ any;
export type PublicPlant = /* TODO */ any;

export const cartPlant /* TODO */ = { id: 101, name: "琴葉榕", price: 2500 };
export const publicPlant /* TODO */ = { id: 101, name: "琴葉榕", price: 2500, currency: "TWD" };
```
<details>
<summary>點擊查看解答</summary>

```ts

```
</details>

## 題目十：綜合練習
> 說明：這是一個後台新增商品的功能，請將以下需求用 TypeScript 實作。\
> 目標：整合運用前面所學的型別定義技巧。

```ts
/* 1️⃣ 定義 type Product
    產品資料結構如下：
    - id: 字串
    - title: 字串
    - category: 字串
    - description: 字串
    - origin_price: 數字
    - price: 數字
    - is_enabled: 布林
    - unit: 字串 
    - imageUrl: 字串
    - imagesUrl: 字串陣列（非必要）
*/

/*
2️⃣ 定義 type CreateProduct
由 Product 衍生，但不包含 id（使用 Omit）
*/

/*
3️⃣ 定義 type UpdateProduct
由 Product 衍生，id, title 必須有，其餘皆可選（使用 Partial 與 Omit）
*/

/*
4️⃣ 實作函式 submitProduct(type, product)
參數說明：
- type 僅能是 "create" 或 "update"
- 若 type === "create"，參數型別應為 CreateProduct
- 若 type === "update"，參數型別應為 UpdateProduct
函式回傳字串：
create → "新增商品成功：${product.title}"
update → "更新商品成功：${product.id}"
*/
```
<details>
<summary>點擊查看解答</summary>

```ts

```
</details>

:::info
回到 [TypeScript 筆記列表](intro)
:::