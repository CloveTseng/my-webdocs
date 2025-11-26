---
title: dialog 標籤
description: 工作時要追求效率，但學習不是
authors: [clove]
tags: [html]
---

## 什麼是 `<dialog>`

`<dialog>` 是 HTML5 原生提供的對話框元素，用於顯示互動式對話框、彈出視窗、提示框等內容。它提供了一個語義化且易於存取的方式來建立 modal 和非 modal 的對話框。

### 核心概念

- **原生支援**：無需額外的 JavaScript 函式庫即可實現對話框功能
- **可存取性**：自動處理焦點管理和鍵盤導航（ESC 鍵關閉）
- **語義化**：明確表達元素的用途，提升 SEO 和螢幕閱讀器支援
- **Backdrop 支援**：可透過 CSS `::backdrop` 偽元素設定背景遮罩樣式

### 基本範例

```html
<dialog id="myDialog">
  <h2>這是一個對話框</h2>
  <p>這是對話框的內容</p>
  <button onclick="document.getElementById('myDialog').close()">關閉</button>
</dialog>

<button onclick="document.getElementById('myDialog').showModal()">開啟 Modal</button>
```

```javascript
const dialog = document.querySelector('#myDialog');

// 開啟為 modal（有背景遮罩）
dialog.showModal();

// 開啟為非 modal（無背景遮罩）
dialog.show();

// 關閉對話框
dialog.close();

// 監聽關閉事件
dialog.addEventListener('close', () => {
  console.log('對話框已關閉');
});
```

### 優勢

1. **無需第三方套件**：減少專案依賴和打包大小
2. **內建鍵盤支援**：自動處理 ESC 鍵關閉功能
3. **焦點管理**：開啟時自動鎖定焦點在對話框內，關閉後恢復原焦點位置
4. **易於樣式化**：可透過 CSS 自訂外觀，包括 `::backdrop` 偽元素
5. **語義化標籤**：提升網頁可存取性和 SEO
6. **瀏覽器原生支援**：效能優於純 JavaScript 實作

### Backdrop 樣式

```css
dialog::backdrop {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
}

dialog {
  border: none;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

## 常見情境

### 1. 確認對話框

```html
<dialog id="confirmDialog">
  <h3>確認刪除？</h3>
  <p>此操作無法復原</p>
  <form method="dialog">
    <button value="cancel">取消</button>
    <button value="confirm">確認</button>
  </form>
</dialog>
```

### 2. 表單對話框

```html
<dialog id="formDialog">
  <form method="dialog">
    <h3>新增項目</h3>
    <input type="text" name="item" required>
    <button type="submit">提交</button>
    <button type="button" onclick="this.closest('dialog').close()">取消</button>
  </form>
</dialog>
```

### 3. 訊息提示框

```javascript
function showMessage(message) {
  const dialog = document.createElement('dialog');
  dialog.innerHTML = `
    <p>${message}</p>
    <button onclick="this.closest('dialog').close()">確定</button>
  `;
  document.body.appendChild(dialog);
  dialog.showModal();
  
  dialog.addEventListener('close', () => {
    dialog.remove();
  });
}
```

## 注意事項

- **瀏覽器支援**：現代瀏覽器都已支援，但舊版 Safari 需注意相容性
- **表單整合**：在 `<dialog>` 內的 `<form method="dialog">` 會自動在提交時關閉對話框
- **關閉返回值**：可透過 `dialog.returnValue` 取得關閉時的值
- **防止背景滾動**：使用 `showModal()` 時會自動防止背景滾動

## 參考資源

- [MDN Web Docs - dialog](https://developer.mozilla.org/zh-TW/docs/Web/HTML/Element/dialog)
- [Can I Use - dialog](https://caniuse.com/dialog)