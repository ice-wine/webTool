# 浏览器

## 浏览器内核

主要分为：渲染引擎和JS引擎

渲染引擎：取网页的内容（如：HTML、XML、图像等）、整理讯息（如：CSS等），以及计算网页显示方式，输出至显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同
JS引擎：解析和执行JS来实现网页的动态效果

最开始渲染引擎和JS引擎并没有区分的很明确，后来JS引擎越来越独立，内核就倾向于只指渲染引擎

### 常见浏览器内核

- Trident：IE内核
- Gecko：Firefox内核
- Presto：Opera前内核(已废弃)
- Webkit：Safari内核，Chrome内核原型，开源
- Blink：由Google和Opera Software开发，Chrome（28及往后版本）、Opera（15及往后版本）和Yandex浏览器中使用


## 会话

### cookie & session

作用：跟踪用户的整个会话，**确认用户身份**。因为HTTP是无状态协议，无法知道用户身份，为了使某域名下的所有网页能够共享某些数据

**session**(存在服务器)：包含用户的认证信息和登录状态等信息。根据接收到cookie后解析出sessionId，去查找session

**cookie**(存在客户端，浏览器)：用户通行证。装有sessionId

session 的运行依赖 session id，而 session id 是存在 cookie 中的，也就是说，如果浏览器禁用了 cookie ，同时 session 也会失效（但是可以通过其它方式实现，比如在 url 中传递 session_id）

### token

临时的证书签名，由 uid + time + sign [+固定参数]

- uid: 用户唯一身份标识
- time: 当前时间的时间戳
- sign: 签名, 使用 hash/encrypt 压缩成定长的十六进制字符串，以防止第三方恶意拼接
- 固定参数(可选): 将一些常用的固定参数加入到 token 中是为了避免重复查库

**存放**

token在客户端一般存放于cookie，localStorage或sessionStorage中。在服务器一般存于数据库中

**认证流程**

1. 用户登录，成功后服务器返回Token给客户端。

2. 客户端收到数据后保存在客户端

3. 客户端再次访问服务器，将token放入headers中

4. 服务器端采用filter过滤器校验。校验成功则返回请求数据，校验失败则返回错误码


## 存储

### cookie & sessionStorage & localStorage 

**共同点**

存客户端（浏览器），同源（协议、域名、端口）

**区别**

- 存储位置：c 在同源的http请求中携带；s 和 l 在本地（浏览器）保存

- 存储大小：c 小于4k；s 和 l 可达5M或更大

- 数据有效期：c（设置过期时间）；s（当前浏览器关闭前）；l（始终有效，持久数据）

- 作用域：c 和 l 同源窗口共享；s 不同浏览器窗口不共享