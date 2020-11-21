# VS Code

VS Code 的全称是 Visual Studio Code，是一款开源的、免费的、跨平台的、高性能的、轻量级的代码**编辑器**。它在性能、语言支持、开源社区方面，都做得很不错。

## IDE 与 编辑器的对比

- IDE（集成开发环境）：对代码有较好的智能提示和相互跳转，同时侧重于工程项目，对项目的开发、调试工作有较好的图像化界面的支持，因此比较笨重。比如 Eclipse

- 编辑器：侧重于文本的编辑。比如 Sublime Text

注：快捷键 mac（windows使用）

## 命令面板

功能：执行各种命令，包括编辑器自带的功能和插件提供的功能（可搜索关键词找功能）。

快捷键：Cmd+Shift+P(win Ctrl+Shift+P)

## 常用快捷键

### 光标的移动

行首： Cmd+左方向键 （win Home）

行尾： Cmd+右方向键 （win End）

文档的开头和末尾： Cmd+上下方向键 （win Ctrl+Home/End）

回到上一个光标的位置：Cmd+U（win Ctrl+U）

在不同的文件之间回到上一个光标的位置：Control+-

### 文本选择

按shift键，可移动光标选中文本

选中单词： Cmd+D，多次按下则自动跳下一个

### 删除

Cmd+Shift+K (win Ctrl+Shift+K)  同 剪切 Ctrl+x

### 代码移动

Option+上下方向键(win Alt+上下)

代码移动和复制 Option+Shift+上下

### 添加注释

单行注释： Cmd+/ （win Ctrl +/）

块注释： Option+Shift+A

### 代码格式化

vscode会根据你使用的语言，使用不同的插件进行格式化，记得要下载相应格式化的插件

整个文档：Option+Shift+F (win Alt+Shift+F)

选中代码： Cmd+K Cmk+F (win Ctrl+K Ctrl+F)

### 快速跳转

快速打开文件：Cmd+P （win Ctrl+P），若按Cmd+Enter,新窗口打开

Tab不同的文件间切换：cmd+shift+[ ]

行跳转：Ctrl+g

输入行号某个文件的某一行：Cmd+P，输入文件名，之后加上“:”和指定行号

## 插件

- Vue多功能集成插件：Vetur
- 详细的 Git 提交日志：GitLens
- 多个括号不同颜色：Bracket Pair Colorizer
- 高亮标签：Highlight Matching Tag
- 自动修改匹配标签：Auto Rename Tag
- 格式化：Beautify
- 快速查看CSS定义：css peek （点击ctrl）
- 批量操作console：Turbo Console Log （添加：control + option + L ；注释 / 启用 / 删除 ：shift + option + C/ U / D ）
- 代码检测：sonarLint
- 文件管理项目：Project Manager  
