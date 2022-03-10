# 对象

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

## 统计

## 交换

```js
let a = 5;
let b = 8;
[a, b] = [b, a];

// 输出  [8, 5]
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
