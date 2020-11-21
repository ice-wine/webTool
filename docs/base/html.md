# HTML

## 概念

- HTML 全称为 HyperText Markup Language，译为**超文本标记语言**
- 是描述性的标记语言，负责描述文档语义

#### 超文本

- 图片、音频、视频、动画、多媒体等内容为超文本，因为超出了文本的限制

- 可从一个文件跳转到另一个文件，与世界各地主机的文件进行连接。即：超级链接文本

**标记语言**

- HTML标签。比如：标签`<a>`表示超链接、标签`<img>`表示图片等等。网页是由网页元素组成的，这些元素是由 HTML标签描述出来，通过浏览器解析，显示给用户看

- 编程语言是有编译过程，标记语言没有，HTML标签直接由浏览器解析执行

**HTML5完整的骨架**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--移动端不要缩小显示:<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">  -->
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <meta name="Author" content="">
    <meta name="Keywords" content="网址关键词" />
    <meta name="Description" content="网站描述SEO" />
    <title>Document</title>
</head>
<body>
    正文
</body>
</html>
```
## 元素

### 常见元素

**主根元素**

`html`：表示一个HTML文档的根（顶级元素）

**文档元数据**(head区域)

`meta、title、style、link、script、base等`

base标签：用于指定基础的路径。指定之后，所有的 a 链接都是以这个路径为基准

**分区根元素**(body区域)

`div、section、article、aside、header、footer、p、span、em、strong等`

### 元素分类

**样式分区**

- 块级元素

- 行内元素

- inline-block：如form表单元素。对外表现：行内元素（不会独占一行），对内表现：块级元素（可以设置宽高）

- 空(void)元素：没有子级节点和内容，没有闭合标签。如：br、hr、img、input、link、meta、area、base

- 置换元素（可替换元素）：CSS 可影响元素位置，但不会影响到元素自身内容。img，video，iframe

**内容分区**

页眉，页脚，标题，侧边栏，段落等

### 嵌套关系

- 块级可包含行内

- 块级不一定能包含块级。比如 div 中可以包含 div，但 p 标签中不能包含 div

- 行内一般不能包含块级。比如 span 中不能包含 div。但有个特例：在 HTML5 中， a 标签中可以包含 div

## HTML5
### 新增特性

- 语义化标签：figure、footer、header、aside、time，良好的HTML结构，易维护，机器（搜索引擎、读屏软件等）易理解结构，有助于SEO

- 表单控件：date、time、email、url、search

- 功能标签：canvas、video、audio

- 本地离线存储：localStorage(长期有效)，sessionStorage(浏览器关闭失效)

- 位置API：Geolocation

- 拖拽API：drag、drop

- History API：允许对浏览器历史记录进行操作，交互加载新信息的页面尤其有用

