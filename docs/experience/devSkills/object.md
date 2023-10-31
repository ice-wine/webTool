# 对象

## 空对象

```js
const isEmpty = (obj) =>
  Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;
isEmpty({}); // true
isEmpty({ a: "not empty" }); //false
```

## 排序

### 字符串

```js
const stringArr = ["Joe", "Kapil", "Steve", "Musk"];
stringArr.sort();
// 输出 ["Joe", "Kapil", "Musk", "Steve"];

stringArr.reverse();
// 输出 ["Steve", "Musk", "Kapil", "Joe"];
```

### 数字

```js
const array = [40, 100, 1, 5, 25, 10];
array.sort((a, b) => a - b);
// 输出 [1, 5, 10, 25, 40, 100];

array.sort((a, b) => b - a);
// 输出 [100, 40, 25, 10, 5, 1];
```

### 对象数组

```js
const objectArr = [
  { first_name: "Lazslo", last_name: "Jamf" },
  { first_name: "Pig", last_name: "Bodine" },
  { first_name: "Pirate", last_name: "Prentice" },
];
objectArr.sort((a, b) => a.last_name.localeCompare(b.last_name));
// 输出 [{first_name: "Pig", last_name: "Bodine"},{first_name: "Lazslo", last_name: "Jamf"},{first_name: "Pirate", last_name: "Prentice"}]
```

## 求和

```js
const array = [5, 4, 7, 8, 9, 2];
array.reduce((a, b) => a + b);
// 输出: 35
```

## 最大值最小值

```js
array.reduce((a, b) => (a > b ? a : b));
// 输出: 9

array.reduce((a, b) => (a < b ? a : b));
// 输出: 2
```

## 去重

```js
const array = [5, 4, 7, 8, 9, 2, 7, 5];
array.filter((item, idx, arr) => arr.indexOf(item) === idx);
```

```js
const nonUnique = [...new Set(array)];
```

## 合并

```js
const user = {
  name: "Kapil Raghuwanshi",
  gender: "Male",
};
const college = {
  primary: "Mani Primary School",
  secondary: "Lass Secondary School",
};
const summary = { ...user, ...college };
```

## 过滤

### 过滤虚假值

```js
const array = [3, 0, 6, 7, "", false];
array.filter(Boolean);
// 输出 [3, 6, 7]
```

## 属性

```js
const obj = { a: 1, b: 2, c: 3 };
Object.entries(obj);
// [Array(2), Array(2), Array(2)] 0: (2) ["a", 1] 1: (2) ["b", 2] 2: (2) ["c", 3]

Object.keys(obj);
// ["a", "b", "c"]

Object.values(obj);
// [1, 2, 3]
```

## 解构

tips：解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。由于 undefined 、null 无法转为对象，所以对它们进行解构赋值时都会报错。

### 处理部分入参

```js
handleParams() {
  const { startDate, endDate, price, ...params } = this.formItem;
  params.startDate = startDate.format("YYYY-MM-DD");
  params.endDate = endDate.format("YYYY-MM-DD");
  params.price = price.toString();
}
```


### 默认值

```js
const App = (props) => {
  const { data } = props || {};
  const { name, age } = data || {};
}
```

## 数组对象异常处理

```js
const App = (props) => {
  const { data } = props || {};
  let infoList = [];
  // 数组的方法只能用真数组调用
  if (Array.isArray(data)) {
    infoList = data.map(item => {
      const { name, age } = item || {}; // 如果使用：? 可选链操作符，滥用会导致编辑后的代码大小增大 即：item?.name 会被编译成 item === null || item === void 0 ? void 0 : item.name
      return `我的名字是${name},今年${age}岁了`;
    });
  }
}
```