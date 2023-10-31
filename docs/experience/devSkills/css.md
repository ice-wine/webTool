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

## Flex

```css
.box-flex{ display: flex !important;}
.item-flex{ flex: 1;}
.flex-1{ flex: 1;}
.flex-2{ flex: 2;}
.flex-3{ flex: 3;}
.flex-4{ flex: 4;}
/*      项目在 X  轴的【排列】方向    */
.flex-row{ flex-direction: row  !important;                        /* 主轴为水平方向，起点在左端   */}
.flex-row-reverse{ flex-direction: row-reverse  !important;        /* 主轴为水平方向，起点在右端   */}

/*     在 X 轴上的【对齐】方式        */
.justify-start{ justify-content: flex-start !important;            /*  默认：左对齐  */ }
.justify-center{ justify-content: center !important;               /* 居中  */ }
.justify-between{ justify-content: space-between !important;       /* 两端对齐，项目之间的间隔都相等    */ }
.justify-around{ justify-content: space-around !important;         /*   每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍  */ }
.justify-end{ justify-content: flex-end !important;                /*  右对齐 */ }

/*      在 X 轴 上 【项目换行】 方式      */
.flex-nowrap{ flex-wrap: nowrap !important;                        /*  （默认）：不换行 */  }
.flex-wrap{ flex-wrap: wrap !important;                            /*  换行，第一行在上方 */  }
.flex-reverse{ flex-wrap: wrap-reverse !important;                 /*  换行，第一行在下方*/  }

/*      项目在 Y  轴的【排列】方向    */
.flex-column{ flex-direction: column  !important;                  /* 主轴为垂直方向，起点在上沿   */}
.flex-column-reverse{ flex-direction: column-reverse  !important;  /* 主轴为垂直方向，起点在下沿  */}
/*    -----  属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性    -----     */
.align-start{align-self: flex-start !important;                    /* 主轴为垂直方向，起点在上沿   */}
.align-end{align-self: flex-end !important;                        /* 主轴为垂直方向，起点在下沿   */}

/*      在 Y 轴 上 【对齐】 方式      */
.align-items-start{ align-items: flex-start !important;             /*   Y轴的起点对齐  */}
.align-items-end{ align-items: flex-end !important;                 /*   Y轴的终点对齐  */}
.align-items-center{ align-items: center !important;                /*   Y轴的中点对齐  */}
.align-items-baseline{ align-items: baseline !important;            /*   Y轴的项目的第一行文字的基线对齐  */}
.align-items-stretch{ align-items: stretch !important;              /*   Y轴如果项目未设置高度或设为auto，将占满整个容器的高度 */}
```