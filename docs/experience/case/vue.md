# Vue

基本 -> 原理 -> 源码

## MVVM

viewModel

## vue特点

渐进式，组件化，响应式

## 注入

配置对象中的部分内容会被提取到vue实例中的过程

data，methods，computed

目的：数据响应式；绑定this

## 响应式原理

v2：`object.defineProperty`；observe：观察；notify：通知视图更新；数组：函数劫持，重写数组方法（pop，push等）

v3：class Proxy

区别：v3效率高，解决了v2的缺陷，如检测到新增属性，删除属性

## 虚拟DOM

提高渲染效率

模板（mustache）-> VDom（单根） -> Dom

模板写法

- outerHtml 

- template配置 

- render（直接写虚拟节点）

diff算法：对比同一个Key

## 挂载

- el:'css选择器' // 配置 #app

- $mount('css选择器') // 手动挂载

## 计算属性 & 方法

区别

- computed可赋值；methods不可

- computed进行缓存，依赖不变，则使用缓存结果，不会重新计算；methods会重新执行

- 凡根据已知数据计算新数据的无参函数，应尽量写成computed，提高效率

```js
computed:{
    fullName(){
       return this.firstName + this.lastName
    },
    // 可赋值
    fullName:{
        get(){ 
            return this.firstName + this.lastName
        },
        set(val){ // val：当前计算结果
            this.firstName = val[0] || '';
            this.lastName = val.substr(1) || '';
        }
    }
}
```