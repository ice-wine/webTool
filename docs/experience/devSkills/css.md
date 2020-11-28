# CSS

## 显示省略号 ellipsis

**一行**

```css
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
```
**两行**

```css
overflow:hidden;
text-overflow:ellipsis;
display:-webkit-box;
-webkit-box-orient:vertical;
-webkit-line-clamp:2;
```

## 文本处理 white-space word-wrap

```css
white-space:nowrap; // 强制不换行
word-wrap:break-word; // 自动换行
word-break:break-all; // 强制英文单词断行
white-space:pre-wrap / pre-line; // 保留 / 合并 空白符，按照文本内容换行正常换行
```

