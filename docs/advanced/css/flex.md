# Flex

弹性布局，任何一个容器都可以指定为 Flex 布局，子元素的`float`、`clear`和`vertical-align`属性将失效

## 声明定义

```css
.box{
  display: flex;
}
/* 行内元素 */
.box{
  display: inline-flex;
}
```

## 元素排列方向 【 flex-direction 】

用于控制盒子元素排列的方向

- row：从左到右水平排列元素（默认值）；主轴为水平方向，起点在左端

- row-reverse：从右向左排列元素 ；主轴为水平方向，起点在右端

- column：从上到下垂直排列元素 ；主轴为垂直方向，起点在上沿

- column-reverse：从下到上垂直排列元素 ；主轴为垂直方向，起点在下沿


## 元素换行 【 flex-wrap 】

一条轴线排不下，如何换行

- nowrap：不换行（默认值）

- wrap：换行，第一行在上方

- wrap-reverse：换行，第一行在下方

## 排列&换行组合 【 flex-flow 】

是 flex-direction 与 flex-wrap 的组合简写模式

```css
.box {
  flex-flow: <flex-direction> || <flex-wrap>;
}
```

## 主轴对齐方式 【 justify-content 】

在主轴上的对齐方式

- flex-start：左对齐（默认值）

- flex-end：右对齐

- center： 居中

- space-between：两端对齐，项目之间的间隔都相等

- space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍

## 交叉轴对齐方式 【 align-items 】

在交叉轴上如何对齐

- stretch：如果项目未设置高度或设为auto，将占满整个容器的高度（默认值）

- flex-start：交叉轴的起点对齐

- flex-end：交叉轴的终点对齐

- center：交叉轴的中点对齐

- baseline： 项目的第一行文字的基线对齐

## 多根轴线对齐方式 【 align-content 】

只有一根轴线，该属性不起作用

- stretch：轴线占满整个交叉轴（默认值）

- flex-start：与交叉轴的起点对齐

- flex-end：与交叉轴的终点对齐

- center：与交叉轴的中点对齐

- space-between：与交叉轴两端对齐，轴线之间的间隔平均分布

- space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍

## 项目item属性

### order

- 数值越小，**排列**越靠前，默认为0

- `order: <integer>` 

### flex-grow

- 项目的**放大比例**，默认为0，即如果存在剩余空间，也不放大

- `flex-grow: <number> /* default 0 */`

### flex-shrink

- 项目的**缩小比例**，默认为1，即如果空间不足，该项目将缩小

- `flex-shrink: <number> /* default 1 */` 

### flex-basis

- 在分配多余空间之前，项目**占据**的主轴空间（main size）

- `flex-basis: <length> | auto /* default auto */` 

### flex

- 默认值为0 1 auto，快捷值：auto (1 1 auto) 和 none (0 0 auto)

- `flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]` 

### align-self

- 允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch

- `align-self: auto | flex-start | flex-end | center | baseline | stretch`