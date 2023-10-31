# Vue2

## 条件 -> 计算属性

```js
computed: {
  isDisabled(){
    return  aaa && (bbb || ccc)
  }
}
```

## 方法 增加参数

```js
@callback="(data) => handleChange(data, item)"
```