# CSS

## css sprite CSS精灵

将多个小图标**合并**成一张大图片，在 CSS 中设置背景图像，并通过调整**background-position**显示不同图标部分。

- 优点：减少 HTTP 请求次数，提高加载速度；便于维护图像资源。

- 缺点：修改单个图标需重做整张图；高清设备需额外处理分辨率。

## display: none 与 visibility: hidden

均可使元素不可见，但在**渲染位置**、对**子孙节点**的影响及**性能**方面有差异

- display: none

    - 元素消失，不占空间。
    - 非继承属性，子孙节点消失。
    - 修改会导致重排。
    - 读屏器不读取内容。

- visibility: hidden

    - 元素可见但透明，占空间。
    - 继承属性，可通过 visibility: visible; 显示子孙节点。
    - 修改仅导致重绘。
    - 读屏器读取内容。

## link 与 @import

link 标签在**性能、兼容性和灵活性**方面优于 @import

- link 标签
    - HTML 方式，用于引入外部 CSS 文件。
    - 支持并行下载，提高加载速度。
    - 可以指定候选样式表（rel="alternate stylesheet"）。
    - 浏览器支持更早，兼容性更好。
    - 可放置在文档的任何位置。

- @import
    - CSS 方式，用于引入其他 CSS 文件。
    - 串行下载，可能导致 FOUC（Flash of Unstyled Content） 问题。
    - 不支持候选样式表。
    - 必须在样式规则之前且只能在文件顶部使用。

## FOUC（Flash Of Unstyled Content）
 
外部样式表（CSS）加载较慢或延迟，导致页面先以无样式的方式显示，然后突然闪烁出样式。

通过优化**样式加载顺序、使用内联样式、预加载和合理使用媒体查询**，有效避免 FOUC，提升用户体验。

- 样式表放在 `<head>` 中

- 使用内联样式 `style`

- 样式预加载 `<link rel="preload">`

- 减少样式表数量和文件大小，优化样式结构和规则

- 使用媒体查询，在适当条件下加载特定样式，避免不必要的加载

## 清除浮动

- 父级 `div` 定义 `height`

- 结尾处加空 `div` 标签 `clear:both`

- 父级 `div` 定义伪类 `:after` 和 `zoom`

- 父级 `div` 定义 `overflow:hidden`

- 父级 `div` 也浮动，需要定义宽度

- 结尾处加 `br` 标签 `clear:both`

- 使用 `clearfix` 类

## 手动写动画 最小时间间隔

将时间间隔设为 16.7ms 可保证平滑动画效果，并适应大多数显示器的刷新频率。（多数显示器默认频率为 60Hz，即 1 秒刷新 60 次，最小间隔为 16.7ms）

## stylus/sass/less

常用的 CSS 预处理器，它们功能上大致相似，在**语法和细节**上有一些区别，取决于个人偏好、团队需求和项目要求

- 语法风格。Sass 使用 Ruby 风格的缩进；Less 和 Stylus 采用更接近 CSS 的语法，使用 {} 表示嵌套。

- 变量。均支持变量。Sass 和 Less 用 $，Stylus 可用 $ 或 @。

- 混合(Mixins)。Sass 和 Less 通过 @mixin 定义；Stylus 使用 mixin 关键字。

- 嵌套。三者均支持，Sass 依赖缩进，Less 和 Stylus 用 {}。

- 继承。Sass 使用 @extend；Less 和 Stylus 则利用 & 符号。

- 颜色混合。Sass: mix() 函数；Less: blend() 函数；Stylus: 同样是 mix() 函数。

- 环境与工具。Sass 需 Ruby 环境编译；Less 和 Stylus 可通过 Node.js/NPM 编译。

## css样式（选择器）的优先级

- 计算权重确定

- !important

- 内联样式

- 层叠顺序，具有相同权重和重要性（后写的优先级高）

## 伪类 伪元素

- 伪类（单冒号）：用于**选择元素**的特定**状态或条件**（已有元素上添加类别的，不会产生新的元素）
    - :hover：鼠标悬停
    - :active：被点击
    - :visited：已访问链接
    - :nth-child：子元素位置

- 伪元素（双冒号）：用于**创建虚拟元素**并**添加样式或内容**（只在外部显示可见，但不会在文档的源代码中找到它们）
    - ::before：元素前插入内容
    - ::after：元素后插入内容
    - ::first-line：首行样式
    - ::first-letter：首字母样式

## 外边距重叠

说明：垂直方向上的相邻**块级**元素之间，当它们的外边距相遇时，会出现合并现象，导致布局出现问题（兄弟关系、‌父子关系）

计算结果：合并后取最大值（均为正数-最大值；均为负数-绝对值最大值，一正一负-相加值） 

- 场景
    - 同级相邻的块级元素，垂直外边距相邻时
    - 父级和第一个/最后一个子元素之间，没有内边距或边框把外边距分隔开
    - 空的块级元素，没有边框或内边距，其上外边距与下外边距合并：使用padding或border、清除浮动、设置overflow属性为hidden或auto、使用inline-block显示模式，以及显式指定外边距属性。

- 解决
    - 使用padding或border
    - 清除浮动
    - 设置overflow属性
    - 使用inline-block
    - 使用::before伪元素

## 透明效果rgba() opacity 

- rgba() CSS颜色表示方法，调整透明度，仅影响元素颜色或背景色，不影响内部内容透明度。

- opacity CSS属性，设置整体透明度，具有继承性，即影响元素及其内部所有内容（包括文本、图像）的可见性。

## CSS在性能优化方面的实践

- **压缩和合并CSS**，减少网络请求次数和文件大小
- 使用**Gzip**压缩，减小CSS文件的大小，加快文件传输速度
- 将CSS文件放在`<head>`标签中，在页面渲染前加载CSS样式
- 避免使用@import：会增加额外的请求延迟，推荐使用`<link>`标签引入CSS文件
- 避免使用CSS表达式，会在每次页面重绘时重新计算，影响性能
- 使用媒体查询，针对不同设备和屏幕尺寸，提高响应性能

## CSS3动画

- 依靠`CSS3`中提出的三个属性：`transition`、`transform`、`animation`
- `transition`：定义过渡效果
- `transform`：定义变形效果
- `animation`：定义关键帧（`@keyframes`）动画

## 重绘和回流（重排）

是浏览器在渲染页面时的关键过程

- **重绘（Repaint）** 元素外观属性（如颜色、背景等）发生改变，但不影响布局时的重新绘制过程。重绘不会影响元素的几何尺寸和位置。
- **回流（Reflow）** 元素布局属性（如尺寸、位置、隐藏/显示等）发生改变，导致浏览器重新计算元素的几何属性，重新构建渲染树的过程。回流会导致其他相关元素的回流和重绘。
- 回流必将引起重绘，而重绘不一定会引起回流

优化方案

- 使用**CSS3动画**，利用transform和opacity属性触发硬件加速，减少重绘和回流影响
- **批量修改样式**：单个元素的样式，尽可能将合并为一次操作
- 使用文档片段、使用离线 DOM：进行复杂的操作（如修改样式、添加子元素等），完成后再将元素放回文档，以减少回流和重绘的影响   createDocumentFragment，appendChild
- 缓存布局属性值：如果需要多次访问某个元素的布局属性（如位置、尺寸等），可以将其值缓存起来，避免多次触发回流计算 getElementById
- 避免强制同步布局：避免频繁使用 offsetTop, clientWidth 等属性，改用 getBoundingClientRect() 并尽量减少调用次数

## CSS3新增伪类

- `:root`：选择文档的根元素，等同于`html`元素。
- `:empty`：选择没有子元素的元素。
- `:target`：选取当前活动的目标元素。
- `:not(selector)`：选择除`selector`元素以外的元素。
- `:enabled`：选择可用的表单元素。
- `:disabled`：选择禁用的表单元素。
- `:checked`：选择被选中的表单元素。
- `:after`：在元素内部最前添加内容。
- `:before`：在元素内部最后添加内容。
- `:nth-child(n)`：匹配父元素下指定子元素中排序第`n`个的元素。
- `:nth-last-child(n)`：匹配父元素下指定子元素中从后向前数排序第`n`个的元素。
- `:nth-child(odd)`：匹配父元素下指定子元素中奇数位置的元素。
- `:nth-child(even)`：匹配父元素下指定子元素中偶数位置的元素。
- `:nth-child(3n+1)`：匹配父元素下指定子元素中满足3n+1位置的元素。
- `:first-child`：选择父元素下的第一个子元素。
- `:last-child`：选择父元素下的最后一个子元素。
- `:only-child`：选择父元素下唯一的子元素。
- `:nth-of-type(n)`：匹配父元素下指定类型的子元素中排序第`n`个的元素。
- `:nth-last-of-type(n)`：匹配父元素下指定类型的子元素中从后向前数排序第`n`个的元素。
- `:nth-of-type(odd)`：匹配父元素下指定类型的子元素中奇数位置的元素。
- `:nth-of-type(even)`：匹配父元素下指定类型的子元素中偶数位置的元素。
- `:nth-of-type(3n+1)`：匹配父元素下指定类型的子元素中满足3n+1位置的元素。
- `:first-of-type`：选择父元素下指定类型的第一个子元素。
- `:last-of-type`：选择父元素下指定类型的最后一个子元素。
- `:only-of-type`：选择父元素下指定类型的唯一子元素。
- `::selection`：选择被用户选取的元素部分。
- `:first-line`：选择元素中的第一行。
- `:first-letter`：选择元素中的第一个字符

## 居中元素

- 固定宽度的元素：使用`margin: 0 auto;`将`div`水平居中

```css
div {
  width: 200px;
  margin: 0 auto;
}
```

- 浮动元素：使用相对定位和负边距的方式进行居中

```css
.container {
  position: relative;
}

.float-element {
  float: left;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
```

- 绝对定位的元素：设置`top`, `left`, `right`, `bottom` 属性为 `0`，并将`margin`设置为`auto`来实现居中

```css
.absolute-element {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
```

具体选择哪种方法取决于布局需求和元素的类型（Flexbox布局）

## 纯CSS创建一个三角形的原理

**具体步骤如下：**

1. 创建一个具有宽度和高度为0的元素。
2. 设置元素的边框宽度为一个较大的值，例如 `20px`。
3. 设置元素的边框样式为 `solid`，表示实线边框。
4. 通过调整元素的边框颜色，使得三条边中的一条边有颜色，其余两条边颜色为透明，从而形成三角形的形状。

在给定的示例中，`#demo`元素的宽度和高度为0，边框宽度为20px，边框颜色设置为透明、透明、红色和透明，从而形成一个红色的等腰三角形。

```css
/* 把上、右、左、三条边隐藏掉（颜色设为 transparent） */
#demo {
  width: 0;
  height: 0;
  border-width: 20px;
  border-style: solid;
  border-color: transparent transparent red transparent;
}
```

## Flexbox 适用场景

`Flexbox` 是 CSS3 中引入的一种弹性盒布局模型，简单、直观且强大的布局方式，适用于构建各种自适应和灵活的布局，特别适合用于构建响应式设计和移动端布局。

适用场景：

- **等高布局**：轻松实现容器内多个项目等高的布局。
- **自适应布局**：自动调整项目的大小，适应不同尺寸的屏幕或容器。
- **项目排序**：通过改变项目的顺序来调整布局。
- **对齐和分布**：提供多种对齐和分布项目的方式。
- **响应式设计**：结合媒体查询，根据屏幕尺寸调整布局。

特点：

- 父容器具有弹性，自动调整项目的大小和顺序。
- 子项目可以具有灵活的宽度、高度和顺序。
- 轻松实现响应式设计，适应不同屏幕尺寸和设备。
- 多种对齐和分布项目的属性和方法，使布局更灵活和易于控制。

## margin padding 适用场景

**margin**：

- 创建元素之间的空白间距，用于调整元素之间的间隔。
- 添加外部空白，使元素与周围的元素或容器之间产生间距。
- 用于调整元素的定位和对齐。
- 用于调整元素的外边距折叠效果（当相邻元素的外边距相遇时）。

**padding**：

- 在元素的内部添加空白区域，用于调整元素内部内容与边框之间的距离。
- 用于创建元素的背景色或背景图的填充区域。
- 用于调整元素的内边距，影响元素内容与边框的距离。
- 用于控制元素的尺寸和布局。

## 抽离样式模块 思路

提高代码的可读性、可维护性和重用性；样式模块的拆分也有助于团队协作和并行开发。

1. **识别公共样式**：提取页面中共享的样式（如颜色、字体、按钮样式等）。
2. **创建公共样式表**：将公共样式抽离到单独的样式表文件（如 `common.css`）。
3. **定义命名规范**：使用 BEM 或其他命名约定，确保样式模块的可维护性和可扩展性。
4. **拆分业务样式**：根据页面或模块的功能和结构，拆分样式为多个模块，避免冲突。
5. **创建样式模块文件**：为每个样式模块创建单独的样式文件（如 `header.css`、`sidebar.css`），按需引入。
6. **构建样式层级结构**：合理组织样式文件的引入顺序，确保样式的层叠顺序和继承关系正确。
7. **统一管理样式文件**：使用构建工具（如 webpack、gulp）进行样式文件的合并、压缩和打包，减少网络请求。
8. **维护和更新**：根据需求变化及时更新和维护样式模块，保持样式的一致性和可复用性。

## 响应式设计+基本原理 兼容低版本的IE

基本原理是利用CSS3媒体查询，为不同尺寸的设备适配不同样式

对于低版本的IE，可采用JS获取屏幕宽度，然后通过resize方法来实现兼容

## a标签上四个伪类的执行顺序

1. link（未访问链接）
2. visited（已访问链接）
3. hover（鼠标悬停）
4. active（激活状态）

记忆口诀：L-V-H-A（Love Hate）喜欢和讨厌

## 两个div，一个高度100px，另一个填满剩下

- calc() 函数来计算剩余高度。.sub { height: calc(100%-100px); }
- 相对定位和绝对定位。父容器 .container 设置为相对定位，子 div .sub 设置为绝对定位，设置 top: 100px 让其距离顶部 100px，设置 bottom: 0 让其底部与父容器底部对齐。
- Flexbox。父容器 .container 设置为 display: flex，并指定 flex-direction: column 使其垂直排列。子 div .sub 使用 flex: 1 来填充剩余的空间，自动调整高度
