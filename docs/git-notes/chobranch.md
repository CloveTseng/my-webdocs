---
title: "在目前分支做一半，要切去別的分支做事"
authors: [clove]
tags: [git, github]
---

## 分支：feature/...(正在開發的分支)
```bash
git stash push -m "work in progress"   #先把做一半的東西存起來
---
```

### 情境一：到新分支開發 
`已實測有效 2024.9.11`

```bash
git checkout -b fix/...             # 新建一個分支並切換過去
# 做完啦，發 PR
---
```

### 情境二：到其他現有分支開發 
`已實測有效 2025.8.28`

```bash
git checkout fix/variables        #切到變數分支修改
git merge dev
#開始修改，做完後發 PR 
```

## 恢復暫存的工作進度
```bash
git stash pop
```