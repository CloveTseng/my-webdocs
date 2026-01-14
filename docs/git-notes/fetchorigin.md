---
title: "在 feat/A 分支準備開發，但我需要另一個 fix/B 的功能"
authors: [clove]
tags: [git, github]
---

> 情境：feat/A 是從 main 分支拉出來的，想要開發新功能，但這個開發需要目前 fix/B 的狀態下去新增
## 分支：feature/A (準備要開發的分支)

1. 先更新遠端分支資訊
```bash
git fetch origin
```

2-1. 將另一個分支的內容合併過來
```bash
# 確認自己在 feat/A 分支
git merge fix/B
```

2-2. 如果只要 fix/B 分支裡面的特定 commit
```bash
git cherry-pick <commit-hash>
```

:::tip
依公司習慣可能會改用 `git rebase fix/B` 來保持 commit 線，但新手不建議使用
:::