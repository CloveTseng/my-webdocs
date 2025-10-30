---
title: 使用 Playwright 測試框架實戰 E2E 測試
description: 工作時要追求效率，但學習不是
authors: [clove]
tags: [testing]
---
:::info
筆記參考資料為 保哥的『實戰 E2E 測試：使用 Playwright 測試框架』課程\
https://learn.duotify.com/courses/e2e-playwright
:::

## 什麼是 End-to-end testing | 端對端測試

從使用者的角度出發，對真實系統 (模擬真實的使用者環境) 進行測試，其他不同面試的測試還有：
- 單元測試 (Unit testing)
- 整合測試 (Integration testing)

## 有這麼多測試工具，為什麼選擇 Playwright ?
- 跨平台：macOS、Linux、Windows 都可以用
- 跨瀏覽器：可以測 WebKit、Firefox、Chromium
- 多語言支援：Node.js(JavaScript、TypeScript)、Python、JAVA、.NET
- 自動等待機制：能在執行操作前自動等待元素
- 截圖及錄製影片
- 支援瀏覽器的無頭和有頭模式
- 強大的 API

## 怎麼開始
### 安裝 
```bash
npm init playwright@latest
```
當提示時，選擇/確認：

- TypeScript 或 JavaScript（預設：TypeScript）`TypeScript`
- 測試資料夾名稱（預設：tests，若 tests 已存在則為 e2e）`tests`
- 加入 GitHub Actions 工作流程（建議用於 CI）`y`
- 安裝 Playwright 瀏覽器（預設：是）`y`

### 開啟 playwright 執行測試

```bash
npx playwright test
```

## 基本測試結構

:::warning
測試腳本寫的爛有 50% 的可能是前端寫的爛 (沒有使用 ARIA 來開發)
:::

```js
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({}) => {
  await page.goto('https://playwright.dev/');

  await page.getByRole('link', { name: 'Get started' }).click();

  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
})
```

:::tip
test 跟 test 間的關聯性不要太重，避免前一項測試死掉，下一個跟著掛掉
:::

### 糟糕的測試案例
使用 css class 作為定位點
```js
test('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  //next-line
  const title = page.locator('.navbar__inner .navbar__title');
  await expect(title).toHaveText('Playwright');
})
```
> 定位器(locators) 是 E2E 測試中最重要的機制之一，使用傳統的 CSS 選取器定位會導致腳本維護困難！

### 請使用官方推薦的內建定位器
- page.getByRole()
- page.getByText()
- page.getByLabel()
- page.getByPlaceholder()
- page.getByAltText()
- page.getByTitle()
- page.getByTestId() | 專門給 E2E 的定位點 `data-`


## Playwright 的 Hook 函式
- test.beforeAll | 在所有測試前，每個工作程序執行一次
- test.beforeEach | 在每個測試案例前執行

```js
const { test } = require("@playwright/test")

test.beforeAll(async () => {
  console.log('beforeAll tests');
})
```

## Page Object
- `await page.goto('https://example.com');`
- `await page.screenshot({path:'screenshot.png'});`
- `await page.click('button[type=submit]');`
- `await page.getByRole('button', {name: 'Accept All Cookies'}).click()`
- `await page.locator('#header').getByRole('link', {name: 'Solutions', exact: true}).hover();`
- `page.on('request', request => { todo something })`

## 常見 Playwright 命令

| 任務 | 命令 |
| --- | --- |
| 執行測試(預設：無頭) | `npx playwright test` |
| 執行測試(有頭) | `npx playwright test --headed` |
| 使用 UI 執行 | `npx playwright test --ui` |
| 僅用 'chromium' 執行測試 | `npx playwright test --project=chromium` |
| 啟用自動生成測試案例的程式碼產生器工具 | `npx playwright codegen` |
| 顯示報告 (report) | `npx playwright show-report` |
| 顯示追蹤 (trace) 追蹤檔都是 zip 檔 | `npx playwright show-trace learn-trace.zip` |
| 執行特定測試檔案 | `npx playwright test tests/example.spec.ts` |
| 執行時停用平行處理 | `npx playwright test --workers=1` |
| 選擇不同 reporter (dot/line/list/...) | `npx playwright test --reporter=dot` |

## codegen 參數
:::tip
使用 codegen 前你一定要先思考好測試的流程與案例，再來操作 codegen
:::

- `npx playwright codegen --help`
- `npx playwright codegen`
- `npx playwright codegen learn.microsoft.com`
- `npx playwright codegen --channel=chrome`
- `npx playwright codegen --channel=msedge --color-scheme=dark`

- `npx playwright codegen --ignore-https-errors`
- `npx playwright codegen --timezone "Asia/Taipei"`
- `npx playwright codegen --viewport-size "1280, 720" --lang "zh-TW" learn.microsoft.com`
- `npx playwright codegen --geolocation="25.0491364,121.5184224"`

- `npx playwright codegen --save-storage .auth/fb.json`
- `npx playwright codegen --load-storage .auth/fb.json`

- `npx playwright codegen --save-har pw.har`
- `npx playwright codegen --save-har pw.har --save-har-glob '*/**/assets/**'`


## 搭配 VSCode 套件
- Playwright Test for VSCode 管理 Playwright 測試與執行
- Playwright Snippets for VSCode 提供大量程式碼片段
- Playwright Snippets UI for VSCode 快速撰寫腳本
- Playwright Helpers 管理 CLI 命令與執行

:::info
更詳細的 API 或其他用法 [playwright 官方文件](https://playwright.dev/docs/intro)
:::