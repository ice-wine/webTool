# 其他

## 当前选项卡是否在后台

```js
const isTabActive = () => !document.hidden; 
isTabActive() // true|false
```

## 元素是否处于焦点

```js
const elementIsInFocus = (el) => (el === document.activeElement);
elementIsInFocus(anyElement)// 元素处于焦点返回true，反之返回false
```

## 设备类型

```js
const judgeDeviceType =
      () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent) ? 'Mobile' : 'PC';
judgeDeviceType()  // PC | Mobile
```

## 文字复制到剪贴板
Clipboard API 它的所有操作都是异步的，返回 Promise 对象，不会造成页面卡顿。而且，它可以将任意内容（比如图片）放入剪贴板。
```js
const copyText = async (text) => await navigator.clipboard.writeText(text)
copyText('前端世界')
```