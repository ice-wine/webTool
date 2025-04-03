# JS

## var、let 及 const 区别

- `var` 主要有全局和函数作用域，并且有变量提升特性
- `let` 和 `const` 提供了块级作用域，更加安全，其中 `const` 提供了不可变性

## 原型与原型链

## 作用域链的理解

是一种用于查找变量和函数的机制，由当前执行环境和其所有父级执行环境的变量对象组成的链式结构。

## 闭包

定义：函数 A 内部有一个函数 B，函数 B 可以访问到函数 A 中的变量，那么函数 B 就是闭包

意义：可以间接访问函数内部的变量

实际场景运用：

- **防抖节流**

```js
// 防抖
function debounce(fn, delay = 300) {
  let timer; //闭包引用的外界变量
  return function () {
    const args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
```

- 在JavaScript中**模拟块级作用域**

```js
function outputNumbers(count=3) {
  (function () {
    for (var i = 0; i < count; i++) {
      console.log("内---",i);
    }
  })();
  console.log("外---",i); //导致一个错误！
}
```

输出：内---0,1,2；外---报错（没有立即执行函数，则结果：内---0,1,2；外---3）

- 用于在对象中**创建私有变量**

```js
var aaa = (function () {
  var a = 1;
  function bbb() {
    a++;
    console.log(a);
  }
  function ccc() {
    a++;
    console.log(a);
  }
  return {
    b: bbb, //json结构
    c: ccc,
  };
})();
console.log(aaa.a); //undefined
aaa.b(); //2
aaa.c(); //3
```

## JS继承

包括构造继承、原型继承、实例继承和拷贝继承等。其中，使用构造函数与原型混合方式是较常用和推荐的方式。

## this对象的理解

- 全局作用域中，`this` 指向全局对象（在浏览器环境中通常是 `window` 对象）。
- 函数中，`this` 的值取决于函数的调用方式：
  - 作为对象方法调用，`this` 指向调用该方法的对象。
  - 作为普通函数调用，`this` 指向全局对象（非严格模式）或 `undefined`（严格模式）。
  - 通过 `call`、`apply` 或 `bind` 调用，`this` 指向第一个参数指定的对象。
  - 作为构造函数调用（使用 `new`），`this` 指向新创建的对象。
- 箭头函数中，`this` 继承自外部作用域，不随调用方式改变。

```js
// 全局作用域中的 this
console.log(this); // 输出: Window

// 对象方法中的 this
const obj = {
  name: 'poetry',
  sayHello: function() {
    console.log(`Hello, ${this.name}!`);
  }
};
obj.sayHello(); // 输出: Hello, poetry!

// 普通函数调用中的 this
function greeting() {
  console.log(`Hello, ${this.name}!`);
}
greeting(); // 输出: Hello, undefined (非严格模式下输出: Hello, [全局对象的某个属性值])

// 使用 call/apply/bind 改变 this
const person = {
  name: 'poetry'
};
greeting.call(person); // 输出: Hello, poetry!
greeting.apply(person); // 输出: Hello, poetry!
const boundGreeting = greeting.bind(person);
boundGreeting(); // 输出: Hello, poetry!

// 构造函数中的 this
function Person(name) {
  this.name = name;
}
const poetry = new Person('poetry');
console.log(poetry.name); // 输出: poetry

// 箭头函数中的 this
const arrowFunc = () => {
  console.log(this);
};
arrowFunc(); // 输出: Window
```

## 事件模型

JS事件流程包括三个阶段：捕获、目标和冒泡，描述了事件在DOM中的传播方式。

- 捕获阶段：window → html → body → div
- 目标阶段：div
- 冒泡阶段：div → body → html → window

实际场景运用：

- 表单验证：使用 keyup 或 blur 事件实时校验输入。
- 动态内容：用事件委托处理动态元素。
- 响应式导航：用 mouseover/mouseout 创建导航。
- 动画：用 setInterval 或 requestAnimationFrame 实现。
- 响应式布局：监听 resize 事件调整布局。
- 浏览器历史：用 popstate 事件管理历史记录。

## 事件代理

原理：将事件绑定在父元素上，利用事件冒泡实现子元素的事件监听。

好处：提高性能，节省内存，减少事件注册，自动绑定新增子元素。

场景：适用于**大量**或**动态添加**的子元素，避免为每个子元素单独绑定事件处理程序。例如，在表格 (`table`) 上为所有单元格 (`td`) 代理点击事件。

注意点：通过 `event.target` 判断触发事件的具体元素。

## 内存泄漏

内存泄漏指程序未释放不再使用的内存，导致内存占用持续增加，最终可能引起内存溢出。

常见原因：
- 未用 var 声明的全局变量
- 闭包函数 (Closures)
- 循环引用
- 控制台日志 (console.log)
- 移除有绑定事件的 DOM 元素 (IE)
- setTimeout 使用字符串而非函数

JS垃圾回收器（Garbage Collection，简称GC）：是一种自动内存管理机制，用于检测和清除不再使用的对象，从而释放内存空间。其工作原理是周期性地检查对象，移除未被引用的对象。
方法：标记清除、引用计数
回收策略：增量回收、分代回收