# Git

## 常见操作

### 全局配置用户信息

```
git config --global user.name "Your Name"
git config --global user.email "email@example.com"
```

### 版本回退

```
git log
回滚到指定的版本：git reset --hard <commit_id> 
强制提交：git push origin HEAD --force
强制提交：git push -f origin master
```

### 汇总

<img :src="$withBase('/imgs/git-code.jpg')" alt="git-code">