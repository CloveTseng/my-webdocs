---
title: "做到一半要更新 main(或 dev)"
authors: [clove]
tags: [git, github]
---

:::info
開發到一半，其他組員表示有更新一個重要的共用功能，\
所以我要先把目前做到一半的暫存，\
更新完後再繼續開發
:::

`已實測有效 2025.8.28`

## 1. 分支：feature/...(正在開發的分支)
```bash
git stash push -m "work in progress"   #先把做一半的東西存起來
---
```

## 2. 同步 main
```bash
git checkout main   #切到主分支
git pull            #更新主分支到最新
```

## 3. 同步開發中的分支 feature/...
```bash
git checkout feature/...      #切回自己的分支
git merge main                #更新到最新的 main
```

## 4. 恢復暫存的工作進度
```bash
git stash pop
```

:::note
- 一開始也可以不要暫存直接 commit
:::