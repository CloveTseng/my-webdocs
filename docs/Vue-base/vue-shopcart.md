---
title: 用 vue 寫個購物車功能
description: 工作時要追求效率，但學習不是
authors: [clove]
tags: [Vue.js, JavaScript]
---
:::note
本站 Vue 的撰寫風格都是 Composition API
:::
:::info
進階任務 - 元件拆分與資料傳遞
:::

## CODE

完整的代碼請直接到 [StackBlitz](https://stackblitz.com/edit/vitejs-vite-rxjn4oye?file=src%2FApp.vue) 查看

## 檔案結構
```md
src/
├── components/                  
├────── AlertToast.vue           # Toast 元件
├────── Cart.vue                 # 購物車列表元件
├────── ProductLists.vue         # 產品列表元件
├── App.vue                      # 專案的主 App 組件
├── main.js                      # 專案的進入點
└── style.css                    # 全域 CSS
```

## 作業要求
- [x] 請嘗試將「商品列表」、「購物車」、「通知」拆分成 3 個元件
- [x] 請使用 props 將商品資料傳遞至「商品列表」元件
- [x] 「購物車」元件的刪除功能，請使用 emit 傳遞事件
- [x] 點擊『加入購物車』彈出 Toast 功能

## 流程與思路


### 1. 將『商品列表』、『購物車』、『通知」』拆分成 3 個元件
  - AlertToast.vue
  - Cart.vue
  - ProductLists.vue

### 2. 將商品資料傳到 `ProductLists.vue` 子元件
  - 先在父元件將值傳給子元件 `ProductList.vue`
    ```js title="App.vue"
    //next-line
    <template v-for="earphone in productData" :key="earphone.id">
      <div class="col-md-4 mb-4">
      //next-line-start
        <ProductLists
          :id="earphone.id"
          :title="earphone.title"
          :description="earphone.description"
          :price="earphone.price"
          :imgUrl="earphone.imgUrl"
          //next-line-end
          @add-to-cart="handleAddToCart"
        />
        
      </div>
    </template>
    ```
  - 子元件使用 `defineProps` 接收值，並渲染在畫面上
    ```js title="ProductLists.vue"
    <script setup>
    const props = defineProps({
      id: Number,
      title: String,
      description: String,
      price: Number,
      imgUrl: String,
    });
    </script>
    ```

### 3. 點擊商品列表『加入購物車』會將商品增加在購物車列表，點擊移除會刪除一筆資料
  - 事件會寫在子元件 `ProductLists.vue` 內，當點擊事件觸發後，將資料回傳給父元件接收
  - 在子元件宣告 `defineEmits`，並撰寫加入購物車的函式及資料，並且按鈕要記得加上點擊事件

  - 回傳至父元件 `App.vue`，加上 `@add-to-cart`並且測試是否有抓到
  - 建立一個空陣列來存放接收到的值 `const cartData=ref([])`，並且把接收的值推進去

  - 使用 `props` 方式將值傳給 `Cart.vue` 子元件
  - `Cart.vue` 元件使用 `defineProps` 來接收 props

  > 這裡補充：`default: () => []` 當父元件沒有傳入資料時，預設為空陣列，避免報錯

  - 因為可能會有多個品項，所以 `Cart.vue` 13 行要加上 `v-for` 遍歷資料\
    (這裡發現好像應該要把 `id` 也傳入，補上)

:::tip
在 Vue 中 `props/emits` 資料流向是單向並且子元件只能唯讀，所以這裡再用 `emits` 把值傳回去給父元件，由父元件來執行『刪除品項』這個功能
:::
  - `Cart.vue` 點擊『移除』按鈕後，將 `id` 再傳回父元件

  - 父元件 `App.vue` 接收來的 `id` ，跑 `removeItem` 函式
    (這裡避免因為找不到 index 出錯，加上了 `if ( index !== -1)`)

### 4. 使用 `provide`/`inject` 完成通知功能
  - 在 `App.vue` 建立 Toast 的狀態 `const toast = reactive({}) `跟方法 `const showToast = () => {}`，使用 `provide` 提供給所有子元件

  - 在 `ProductLists.vue` 利用 `inject` 引入父元件提供的 `showToast` 方法

  - 在 `AlertToast.vue`，也使用 `inject` 引入父元件的 `toast` 狀態，並且如果 `v-if="toast.isShow"` 是 `true` 才顯示 toast


## 學習知識點

- 這個作業算是傳值的總合練習，實際在寫的時候會發現哪邊的觀念還不夠熟悉

## 後記

:::note
[StackBlitz](https://stackblitz.com/edit/vitejs-vite-rxjn4oye?file=README.md)
:::

## 教助反饋
1. 在元件拆分的結構中，建議將細部資料的拆解統一放在其 `Component` 中操作，不需要在 `App.vue` 中做處理，可以將資料直接放各元件中，再由各元件做各資料類別的呈現處理
  ```js title="App(原本).vue"
  <ProductLists
    :id="earphone.id"
    :title="earphone.title"
    :description="earphone.description"
    :price="earphone.price"
    :imgUrl="earphone.imgUrl"
    @add-to-cart="handleAddToCart"
  />
  ```
  ```js title="App(優化版).vue"
  <ProductLists
    :product="earphone"
    @add-to-cart="handleAddToCart"
  />
  ```
接著 `ProductLists.vue` 就要修改成以下：
  ```js title="ProductLists(原本).vue"
  const props = defineProps({
    id: Number,
    title: String,
    description: String,
    price: Number,
    imgUrl: String,
  });
  ```
  - 以及 `template` 的地方也要修改
  ```js title="ProductLists(優化版).vue"
  <script setup>
    {/* ...略 */}
  const props = defineProps({
    //next-line-start
    product: {
      type: Object,
      required: true
    }
    //next-line-end
  });
  {/* ...略 */}
  </script>
  <template>
    //next-line
    <h5 class="card-title">{{ product.title }}</h5>
  </template>
  ```
2. 商品的圖片建議加上 `alt` 敘述，記得使用 `v-bind:alt` 做綁定
3. 同學少了總金額的金額的計算可以使用，提醒同學可以使用 `computed` 搭配 `reduce()` 進行累加。
```jsx
const totalPrice = computed(() => {
  return cartData.value.reduce(
    (pre, item) => pre + item.price * (item.qty || 1),
    0
  );
});
```
4. 命名調整：
  - `AlertToast.vue` 建議改成 `Toast.vue`
  - `toast` (state) 建議改成 `toastState`
  - `showToast` (function) 改成 `pushToast`
5. 可以試試看使用陣列管理 message，讓通知訊息有堆疊的效果