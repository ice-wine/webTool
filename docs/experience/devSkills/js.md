# JS

## 数据类型检测

- typeof：判断基础数据类型

- instanceof：判断复杂引用数据类型

- 推荐：**Object.prototype.toString**

实现一个全局通用的数据类型判断方法

```js
function getType(obj){
  let type  = typeof obj;
  if (type !== "object") {    // 先进行typeof判断，如果是基础数据类型，直接返回
    return type.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase()); // 注意：直接使用 typeof 返回的是小写
  }
  // 对于typeof返回结果是object的，再进行如下的判断，正则返回结果 // 注意正则中间有个空格
  return Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/, '$1');  
}
/* 代码验证，需要注意大小写，哪些是typeof判断，哪些是toString判断？思考下 */
getType([])     // "Array" typeof []是object，因此toString返回
getType('123')  // "String" typeof 直接返回
getType(document) // "HTMLDocument" toString返回
getType(window) // "Window" toString返回
getType(null)   // "Null"首字母大写，typeof null是object，需toString来判断
getType(undefined)   // "Undefined" typeof 直接返回
getType()            // "Undefined" typeof 直接返回
getType(function(){}) // "Function" typeof能判断，因此首字母小写
getType(/123/g)      //"RegExp" toString返回
```

## 深浅拷贝

### 浅拷贝

自己创建一个新的对象，来接受你要重新复制或引用的对象值。基本-值；引用-地址

- Object.assign(target, sources)：循环遍历原对象的属性（非继承&不可枚举属性）

- 扩展运算符方式 let cloneObj = { ...obj }

- concat 拷贝数组

- slice 拷贝数组 arr.slice(begin, end)

### 深拷贝

将一个对象从内存中完整地拷贝出来一份给目标对象，并从堆内存中开辟一个全新的空间存放新对象，且新对象的修改并不会改变原对象，二者实现真正的分离。

- JSON.parse(JSON.stringfy(obj))：对象序列化

存在问题，eg：函数，undefined，symbol -> 序列化后键值对消失；Date -> 字符串；RegExp -> 空对象；NaN，Infinity -> null；无法拷贝不可枚举，原型链，循环引用

- 普通递归

存在问题，eg：普通引用类型复制，对于 Array、Date、RegExp、Error、Function 这样的引用类型并不能正确地拷贝；无法拷贝不可枚举，Symbol，循环引用

```js
function deepClone(obj) { 
  let cloneObj = {}
  for(let key in obj) {                 //遍历
    if(typeof obj[key] ==='object') { 
      cloneObj[key] = deepClone(obj[key])  //是对象就再次调用该函数递归
    } else {
      cloneObj[key] = obj[key]  //基本类型的话直接复制值
    }
  }
  return cloneObj
}
```

- 改进递归

   - 能够遍历对象的不可枚举属性以及 Symbol 类型 -> Reflect.ownKeys

   - Date、RegExp 类型 -> 直接生成一个新的实例返回

   - 原型链 -> getOwnPropertyDescriptors(获对象所有属性及对应特性) & create(创建，并继承传入)

   - 循环引用 -> 利用WeakMap类型作为 Hash 表


```js
const isComplexDataType = obj => (typeof obj === 'object' || typeof obj === 'function') && (obj !== null)
const deepClone = function (obj, hash = new WeakMap()) {
  if (obj.constructor === Date) 
  return new Date(obj)       // 日期对象直接返回一个新的日期对象
  if (obj.constructor === RegExp)
  return new RegExp(obj)     //正则对象直接返回一个新的正则对象
  //如果循环引用了就用 weakMap 来解决
  if (hash.has(obj)) return hash.get(obj)
  let allDesc = Object.getOwnPropertyDescriptors(obj)
  //遍历传入参数所有键的特性
  let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc)
  //继承原型链
  hash.set(obj, cloneObj)
  for (let key of Reflect.ownKeys(obj)) { 
    cloneObj[key] = (isComplexDataType(obj[key]) && typeof obj[key] !== 'function') ? deepClone(obj[key], hash) : obj[key]
  }
  return cloneObj
}
// 下面是验证代码
let obj = {
  num: 0,
  str: '',
  boolean: true,
  unf: undefined,
  nul: null,
  obj: { name: '我是一个对象', id: 1 },
  arr: [0, 1, 2],
  func: function () { console.log('我是一个函数') },
  date: new Date(0),
  reg: new RegExp('/我是一个正则/ig'),
  [Symbol('1')]: 1,
};
Object.defineProperty(obj, 'innumerable', {
  enumerable: false, value: '不可枚举属性' }
);
obj = Object.create(obj, Object.getOwnPropertyDescriptors(obj))
obj.loop = obj    // 设置loop成循环引用的属性
let cloneObj = deepClone(obj)
cloneObj.arr.push(4)
console.log('obj', obj)
console.log('cloneObj', cloneObj)
```

## 继承

### 原型链继承 prototype

构造函数、原型、实例。即每一个构造函数都有一个原型对象，原型对象又包含一个指向构造函数的指针，而实例则包含一个原型对象的指针

因为内存空间是共享，继承同原型对象的实例，会互相影响

### 构造函数继承 call

父类的引用属性不会被共享，但只能继承父类的实例属性和方法，不能继承原型属性或者方法。

### 原型链&构造函数组合继承

会多调用一次

### 原型式继承 Object.create

Object.create

实例，会互相影响

### 寄生式继承

### 原型式&寄生组合式继承 - 最优

```js
function clone (parent, child) {
    // 这里改用 Object.create 就可以减少组合继承中多进行一次构造的过程
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
  }

  function Parent6() {
    this.name = 'parent6';
    this.play = [1, 2, 3];
  }
   Parent6.prototype.getName = function () {
    return this.name;
  }
  function Child6() {
    Parent6.call(this);
    this.friends = 'child5';
  }

  clone(Parent6, Child6);

  Child6.prototype.getFriends = function () {
    return this.friends;
  }

  let person6 = new Child6();
  console.log(person6);
  console.log(person6.getName());
  console.log(person6.getFriends());
```

### ES6 - extends 实现逻辑

<img :src="$withBase('/imgs/js-extend.png')" alt="js-extend" >
