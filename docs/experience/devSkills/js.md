# JS

## 数据类型检测

- typeof：判断基础数据类型

- instanceof：判断复杂引用数据类型

- 推荐：**Object.prototype.toString**

实现一个全局通用的数据类型判断方法

```js
function getType(obj) {
  let type = typeof obj;
  if (type !== "object") {
    // 先进行typeof判断，如果是基础数据类型，直接返回
    return type.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase()); // 注意：直接使用 typeof 返回的是小写
  }
  // 对于typeof返回结果是object的，再进行如下的判断，正则返回结果 // 注意正则中间有个空格
  return Object.prototype.toString
    .call(obj)
    .replace(/^\[object (\S+)\]$/, "$1");
}
/* 代码验证，需要注意大小写，哪些是typeof判断，哪些是toString判断？思考下 */
getType([]); // "Array" typeof []是object，因此toString返回
getType("123"); // "String" typeof 直接返回
getType(document); // "HTMLDocument" toString返回
getType(window); // "Window" toString返回
getType(null); // "Null"首字母大写，typeof null是object，需toString来判断
getType(undefined); // "Undefined" typeof 直接返回
getType(); // "Undefined" typeof 直接返回
getType(function() {}); // "Function" typeof能判断，因此首字母小写
getType(/123/g); //"RegExp" toString返回
```
## 条件

### 逻辑运算符 && || 

```js
let foo = 10;
foo === 10 && doSomething();
// 等价于 if (foo == 10) doSomething();

foo === 5 || doSomething();
// 等价于 if (foo != 5) doSomething();
```

### 空合并运算符 ??

当其左侧操作数为空或未定义时，返回其右侧操作数，否则返回其左侧操作数。

```js
const foo = null ?? "my school";
// 输出: "my school"

const baz = 0 ?? 42;
// 输出: 0
```

## 校验字段（策略模式）

```js
const validators = [
  { message: "用户名不能为空", required: true, key: "username" },
  { message: "密码不能为空", required: true, key: "password" },
  { message: "手机号不能为空", required: true, key: "phoneNumber" }
];
validator(values) {
  const result = validators.some(el => {
    if (el.required && !values[el.key]) {
      this.$message.error(el.message);
      return true;
    }
  });
  return result;
}
submit(values) {
  if (this.validator(values)) {
    return;
  }
}
```

## 日期之间相差的天数

```js
const dayDiff = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
dayDiff(new Date("2021-10-21"), new Date("2022-02-12")) // Result: 114
```

## 从url获取参数并转为对象

```js
const getParameters = URL => JSON.parse(`{"${decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"')}"}`)
getParameters("https://www.google.com.hk/search?q=js+md&newwindow=1");
```

## 生成随机十六进制颜色值

```js
const randomHexColor = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`
console.log(randomHexColor());
// #a2ce5b
```