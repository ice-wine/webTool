# CSS

## 概念

CSS：Cascading Style Sheet，层叠样式表。给 HTML 页面标签添加各种样式，定义网页的显示效果。CSS 将网页内容和显示样式进行分离，提高了显示功能。

## 单位

**绝对单位**

1 in(英寸) = 2.54 cm(厘米) = 25.4 mm(毫米) = 72 pt(点) = 6pc(皮卡)

**相对单位**

px：像素

em：印刷单位相当于12个点

%：百分比，相对周围的文字的大小

## 属性
### 非布局样式

字体、行高、颜色、大小、背景、边框、滚动、换行、装饰性属性（粗体、斜体、下划线）等。

### 定位属性
## 样式表

CSS 和 HTML 的结合方式

- 行内：标签内使用`style`属性

- 内嵌：页面使用`<style>`标签

- 外部：引入 1.`<link>`标签 2.import

## 选择器

指CSS要作用的标签

### 基本选择器

- 标签：所有标签

- ID：#

- 类：.

- 通用：*

### 高级选择器

- 后代

- 交集

- 并集

- 伪类：同一个标签，根据其不同的种状态，有不同的样式。

  - 静态伪类：适用于超链接。:link、:visited

  - 动态伪类：适用于所有标签。:hover、:active、:focus

## 层叠性

- 行级样式 > 内嵌样式表 > 外部样式表（就近原则）

- ID选择器 > 类选择器 > 标签选择器

- !important标记：优先级最高

<img :src="$withBase('/imgs/css-extend.png')" alt="css-extend" >

## 盒模型

<img :src="$withBase('/imgs/css-box.png')" alt="css-box" style="width:500px">

## 定位

### 清除浮动

1. 加高法； 给浮动元素的祖先元素加高度。浮动在一个有高度的盒子中，那么这个浮动就不会影响后面的浮动元素。

2. clear:both；不允许左侧和右侧有浮动对象(致命的问题，所在的标签的margin属性会失效)

3. 隔墙法；两部分浮动元素中间，建一个墙，隔开两部分浮动

4. overflow:hidden；隐藏掉溢出边框的内容

## CSS3

- **过渡 transition** ：transition: all 3s linear 0s; 所有的属性 - 持续时间 - 运动曲线 - 过渡延迟

- **2D 转换 transform** ：缩放scale(水平, 垂直)、位移translate(水平, 垂直)、旋转rotate(角度)、变形

- **3D 转换 transform** ：旋转rotateX,...Y,...Z、移动translateX,..Y,...Z、透视perspective、3D呈现（transform-style）

- **动画animation**

```css
定义动画：
    @keyframes 动画名{
        from{ 初始状态 }
        to{ 结束状态 }
    }

调用：
animation:定义的动画名称  持续时间  执行次数(steps():非连续执行，适用于如时钟)  是否反向  运动曲线 延迟执行。(infinite 表示无限次)
```

## 布局

### 常见布局

- table 表格布局：早期使用的布局，如今用得很少。

- float 浮动 + margin：为了兼容低版本的IE浏览器，很多网站（比如腾讯新闻、网易新闻、淘宝等）都会采用 float 布局。

- inline-block 布局：对外的表现是行内元素（不会独占一行），对内的表现是块级元素（可以设置宽高）。

- flex 布局：为布局而生，非常灵活，是最为推荐的布局写法。

### 水平垂直居中

1. **行内元素**（文字、图片等）

    ```css
    .father {
        text-align: center;
        height: 20px;
        line-height: 20px;
    }
    ```

2. **块级元素**

    tips：水平居中 margin: auto 

- 绝对定位 + margin（需要指定子元素的宽高，不推荐）

- 绝对定位 + translate（无需指定子元素的宽高，推荐）

    ```css
    .father{
            position: relative;
            min-height: 500px;
    }
    .son {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    ```

- flex 布局

    ```css
    .father{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    ```

- flex 布局 + margin: auto

    ```css
    .father{
        display: flex;
    }
    .son {
        margin: auto;
        background: red;
    }
    ```

## 兼容
