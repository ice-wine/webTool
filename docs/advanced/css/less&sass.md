# less&sass

都属于Css预处理器。Css预处理器定义了一种新的语言，为Css增加一些编程的特性，将Css作为目标生成文件

## 共性

- 混合(Mixins)：将一个定义好的classA引入到另一个classB中，从而简单实现classB继承了classA的所有属性

- 参数混合(Parametric)：可以像函数一样传递参数的class

- 嵌套规则：class中嵌套class，从而减少重复的代码

- 运算：css中的数学计算

- 颜色功能：可以编辑你的颜色

- 命名空间：样式分组，从而方便被调用

- 作用域：局部修改样式

- JavaScript表达式：在css样式中使用javaScript表达式赋值

## 不同

- Less是基于JavaScript，是在客户端处理的。

- Sass是基于Ruby的，是在服务器端处理的。

- 语法规则不用。变量，Less用@，Sass用$。
## 选择

- `less`环境和使用比`sass`简单

- `sass`比`less`功能强大，sass：变量、作用域、函数、进程控制、数据结构