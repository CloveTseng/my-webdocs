---
title: 'Linux 指令'
tags: [linux, wsl, ubuntu]
---
## Linux 指令

### 系統類
- `sudo` | 管理員模式
- `apt install` | 安裝檔案
- `apt list --installed` | 列出所有已安裝的套件
	- `| grep node` | 篩選已安裝套件 (加上管道符及篩選條件，例：node)
- `pwd` | 當前路徑
- `cd $HOME` | 回到 home
- `cd ..` | 回到上一層
- `source ~/.bashrc` | 重啟設定檔
- `&&` | 連結符，如果前一個指令執行成功才執行下一個指令
- `sudo apt i -y` | -y 是指如果出現詢問『確定要安裝嗎？』一律回答『是』

### 檔案類
- `/mnt/d/` | 掛載在 wsl 的 d 槽
- `\\wsl$` | 從 windows 檔案總管開啟 wsl 的資料夾
- `ls` | 列出所有檔案
- `ls -a` | 列出所有檔案(含隱藏檔)
- `vi` | 建立一個 vim 文件
- `cat` | 印出檔案內容
- `pwd` | 印出當前完整路徑
- `cp` | 複製單一檔案
- `mv` | 移動或修改檔名(資料夾)
	- `mv [舊檔名] [新檔名]` | cd 到包含該檔案(資料夾)的目錄
	- `mv ~/projects/offwork ~/documents/off-work` | 移動並改名
- `-r` | 搭配 `cp` 複製整個資料夾及其內容
- `-f` | 強制選項(不會問你是否確認)
- `.` | 代表當前目錄
- `~/` | 代表 home 目錄
- `~/projects/` | 代表某個特定資料夾(projects 是資料夾名稱)
	- `cp -r /mnt/d/project/xxxproject .` ← 複製專案到當前目錄
- `rm -rf 資料夾名稱` | 強制刪除資料夾(含內文件及子資料夾)


### 美化類
- `sudo apt install zsh` | 安裝 zsh 
- 安裝 oh-my-zsh | [GitHub Repo](https://github.com/ohmyzsh/ohmyzsh)
- 安裝主題 powerlevel10k | [GitHub Repo](https://github.com/romkatv/powerlevel10k)
	```cmd
	git clone --depth=1 [https://github.com/romkatv/powerlevel10k.git](https://github.com/romkatv/powerlevel10k.git) ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
	```
	- 會跳出一連串的風格設定問題(依喜好選擇即可)
		- 重新設定風格輸入： `p10k configure` 可以重新設定
- `vi ~/.zshrc` | 修改設定檔
	- | 增加 npm run 的縮寫

### 其他
- 如果要移除發行版本 (例如 ubuntu-24.04 這版)
	```bash
	wsl --unregister Ubuntu-24.04
	```

### 快捷鍵
- `ctrl + r` | 快速搜尋歷史命令
- `ctrl + t` | 搜尋檔案
- `ctrl + u` | 清除目前命令列的輸入 (還原 `ctrl + y`)