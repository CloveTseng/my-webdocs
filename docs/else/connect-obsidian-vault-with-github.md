---
title: 將 Obsidian 筆記庫連接至 GitHub
description: 工作時要追求效率，但學習不是
authors: [clove]
tags: [obsidian, github]
---

:::info
這裡的步驟是使用 Obsidian 的 git 插件來定期上傳到 GitHub，並且使用新建立的 Obsidian Vault
:::

# 將 Obsidian 筆記庫連接至 GitHub
1. 開啟 Obsidian 建立一個新的庫
  <img src="/blog/obsidian-new-vault.png" width="400"/>
2. 新增一個新筆記，並輸入一些內容
3. 安裝 git 插件：開啟後可以設定定期上傳到 GitHub 的時間間隔、commit message 等設定
  > 記得開啟 `Pull on startup` 選項，這樣每次開啟 Obsidian 時都會自動 pull 最新的筆記庫
4. 建立一個新的 GitHub 倉庫
5. 使用自己常用的 IDE 開啟筆記庫
6. Download Git (如果還沒安裝的話)
7. 使用 `git init` 初始化本地端，並且設定遠端倉庫為剛剛建立的 GitHub 倉庫
  ```bash
  git init
  git remote add origin <GitHub 倉庫的 URL>
  git add .
  git commit -m "initial commit"
  git push -u origin main // 將筆記推上 GitHub 倉庫
  ```
8. 去 GitHub 倉庫查看，應該可以看到剛剛的筆記已經上傳到 GitHub 倉庫
9. 在 Obsidian 修改一下筆記，再等一下會看到 git 自動上傳到 GitHub 倉庫的通知
  <img src="/blog/obsidian-commit.png" width="200"/>



