---
title: CORS 錯誤
description: 工作時要追求效率，但學習不是
authors: [clove]
tags: [cors]
---

## 什麼是 CORS

**CORS**（Cross-Origin Resource Sharing，跨來源資源共用）是瀏覽器的安全機制，用來限制網頁從「不同來源」向伺服器發送請求。

- **同源**：協定、網域、port 都相同（例如都是 `https://example.com:443`）
- **跨源**：任一個不同就算跨源（例如前端在 `localhost:3000`，API 在 `api.example.com`）

瀏覽器預設會阻擋跨源請求，除非伺服器在回應裡明確用 CORS 標頭表示允許。所以 CORS 錯誤通常出現在「前端和 API 不同網域／port」的情境。

## 發生了什麼？
忽然有一天要開發的時候就取不到 API 資料，並且在 console 顯示了 `has been blocked by CORS policy: Request header field authorization is not allowed by Access-Control-Allow-Headers in preflight response. ` 

## 解決辦法有什麼？

針對這則錯誤（`authorization` 不被允許），代表 **伺服器沒有在 preflight 回應裡允許 `Authorization` 這個 request header**。要從「提供 API 的那一端」改設定：

### 1. 後端加上允許的 Header（根本解）

在 API 伺服器的 CORS 設定裡，把 `Authorization` 加進允許的 request headers。例如：

**Node.js (Express + cors)：**
```js
const cors = require('cors');
app.use(cors({
  origin: 'https://你的前端網域',
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
```

**其他後端**：在回應 preflight（OPTIONS）或一般請求時，加上：
```http
Access-Control-Allow-Headers: Content-Type, Authorization
```

### 2. 開發時暫時繞過（僅限本機）

- 用瀏覽器擴充暫時關 CORS（不建議長期依賴）
- 或讓前端透過**同源的代理**去請求 API，由代理轉發到真正的 API，這樣對瀏覽器來說是同源請求，就不會觸發 CORS

### 重點

CORS 是瀏覽器依「伺服器回傳的標頭」來決定放行與否，所以**必須在 API 那一端**設定好 `Access-Control-Allow-Headers`（包含 `Authorization`），前端無法單靠改程式避開這則錯誤。