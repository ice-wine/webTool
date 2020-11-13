# chrome调试

## console
### 基本输出

```js
  console.log("打印字符串");
```

```js
  console.error("我是个错误");
```

```js
  console.info("我是个信息");
```

```js
  console.warn("我是个警告");
```

### 格式化输出

```js
  console.log("%c我是%c自定义样式","font-size:20px;color:green","font-size:10px;color:red");
```

### DOM输出

```js
 var ul = document.getElementsByTagName("ul");
 console.dirxml(ul); // 树形输出table节点，即<table>和它的innerHTML，由于document.getElementsByTagName是动态的，所以这个得到的结果肯定是动态的
```

### 对象输出

```js
 console.dir(obj);//显示对象自有属性和方法
```

```js
 console.table(stu); // 多个对象的集合
```

### 成组输出

```js
 console.group("start"); //引号里是组名
 console.log("sub1");
 console.log("sub1");
 console.groupEnd("end");
```


### 函数计数和跟踪
```js
 console.count("调用次数")；// 放在函数里，每当这句代码运行输出所在函数执行次数
 console.trace()；//显示函数调用轨迹(访问调用栈）
```

### 计时
```js
 console.time() //计时开始
 fun(); //调用函数
 console.timeEnd() //计时结束并输出时长
```
## Source 断点

Source内容区设置断点 

## debugger