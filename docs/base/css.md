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
