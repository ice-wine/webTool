# 前端

## 数组去重

```js
Array.prototype.uniq = function () {
  return [...new Set(this)]
}
```

## 获取Url参数

```js
function getUrlParam(sUrl, sKey) {
    var result, sParam = {};
    sUrl.replace(/[\?&]?(\w+)=(\w+)/g, (k0, k1, k2)=>{
        sParam[k1] === void 0 ? sParam[k1] = k2 : sParam[k1] = [].concat(sParam[k1], k2);
    });
    sKey === void 0 || sKey === '' ? result = sParam : result = sParam[sKey] || '';
    return result;
}
```

## 修改this指向

```js
function bindThis(f, oTarget) {
    let args = Array.prototype.slice.call(arguments, 2);
    return function(){
        return f.apply(oTarget, Array.prototype.slice.call(arguments).concat(args));
    }
}
```

## 字符串长度

如果第二个参数 bUnicode255For1 === true,则所有字符长度为 1;否则如果字符 Unicode 编码 > 255 则长度为 2

```js
function strLength(s, bUnicode255For1) {
    var length = s.length;
    if(!bUnicode255For1){
        for( var i in s){
            if(s.charCodeAt(i)>255) {
                length++;
            }
        }
    }
    return length;
}
```

## dom节点查找

查找两个节点的最近的一个共同父节点，可以包括节点自身

```js
function commonParentNode(oNode1, oNode2) {
    if(oNode1.contains(oNode2)){
        return oNode1;
    }else{
        return commonParentNode(oNode1.parentNode,oNode2);
    }
}
```

## 斐波那契函数

```js
function fibonacci(n) {
    return n <= 2 ? 1 : fibonacci(n-1)+fibonacci(n-2)
}
```