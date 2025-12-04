---
title: 如何增加 cookie 的安全性？
description: 工作時要追求效率，但學習不是
authors: [clove]
tags: [internet]
---

:::info
在 [cookie, sessionStorage 和 localStorage 差異](cookievssessionvslocal) 中有提到 cookie 是什麼，這裡詳細說明如何增加 cookie 在使用時的安全性
:::

**寫入 Cookie**
```javascript
// 在伺服器端（Node.js/Express）
res.cookie('token', 'abc123', {
  httpOnly: true,  
  secure: true,
  sameSite: 'strict'
});
```

### 1. HttpOnly 屬性

降低 XSS 注入惡意程式碼攻擊，取得 cookie 資訊的風險

```javascript
// 伺服器端設定（無法透過 JavaScript 設定）
Set-Cookie: sessionId=abc123; HttpOnly
```


### 2. Secure 屬性

確保 Cookie 只在 HTTPS 連線下傳送。

```javascript
// 伺服器端設定
Set-Cookie: sessionId=abc123; Secure

// 或同時設定多個屬性
Set-Cookie: sessionId=abc123; Secure; HttpOnly
```

### 3. SameSite 屬性

防止 CSRF 攻擊，控制 Cookie 在跨站請求時的行為。

```javascript
// Strict: 完全禁止跨站發送
Set-Cookie: sessionId=abc123; SameSite=Strict

// Lax: 允許部分跨站請求（GET 且為頂層導航）
Set-Cookie: sessionId=abc123; SameSite=Lax

// None: 允許跨站發送（必須搭配 Secure）
Set-Cookie: sessionId=abc123; SameSite=None; Secure
```

**SameSite 選項比較**

| 屬性值 | 說明 | 使用場景 |
|--------|------|----------|
| **Strict** | 完全禁止第三方網站攜帶 Cookie | 高安全性需求，如銀行網站 |
| **Lax** | 部分允許（預設值），允許安全的跨站請求 | 一般網站，平衡安全性與便利性 |
| **None** | 允許所有跨站請求 | 需要跨站功能，如 OAuth、嵌入式內容 |

### 4. 設定適當的 Domain 和 Path

限制 Cookie 的作用範圍。

```javascript
// 限制在特定子域名
Set-Cookie: sessionId=abc123; Domain=.example.com

// 限制在特定路徑
Set-Cookie: sessionId=abc123; Path=/admin

// 組合使用
Set-Cookie: sessionId=abc123; Domain=.example.com; Path=/; Secure; HttpOnly; SameSite=Lax
```

### 5. 設定合理的過期時間

```javascript
// 設定具體過期時間
Set-Cookie: sessionId=abc123; Expires=Wed, 21 Oct 2024 07:28:00 GMT

// 設定相對時間（秒）
Set-Cookie: sessionId=abc123; Max-Age=3600  // 1 小時後過期

// Session Cookie（瀏覽器關閉後刪除）
Set-Cookie: sessionId=abc123
```

### 6. 完整的安全 Cookie 設定範例

**Node.js (Express)**
```javascript
const express = require('express');
const app = express();

app.get('/login', (req, res) => {
  res.cookie('sessionId', 'abc123', {
    httpOnly: true,      // 防止 XSS
    secure: true,        // 只在 HTTPS 下傳送
    sameSite: 'strict',  // 防止 CSRF
    maxAge: 3600000,     // 1 小時
    path: '/',
    domain: '.example.com'
  });
  res.send('登入成功');
});
```

**PHP**
```php
setcookie(
    'sessionId',           // name
    'abc123',              // value
    [
        'expires' => time() + 3600,
        'path' => '/',
        'domain' => '.example.com',
        'secure' => true,
        'httponly' => true,
        'samesite' => 'Strict'
    ]
);
```
### 7. 最佳實踐總結

✅ **必須做的**
- 敏感 Cookie 必須設定 `HttpOnly`
- 生產環境必須使用 HTTPS 和 `Secure` 屬性
- 設定適當的 `SameSite` 屬性
- 設定合理的過期時間

⚠️ **建議做的**
- 限制 Cookie 的 `Domain` 和 `Path`
- 定期輪換 Session Token
- 實施 CSRF Token 機制
- 記錄和監控異常的 Cookie 使用

❌ **不要做的**
- 不要在 Cookie 中儲存敏感明文資料
- 不要設定過長的過期時間
- 不要在不安全的環境下傳送 Cookie
- 不要忽視第三方套件的安全性