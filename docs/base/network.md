# 网络


## HTTP请求

- `GET`：获取服务器的资源；幂等：多次请求返回相同结果；参数传递：通过URL查询字符串

- `POST`：提交数据到服务器；不幂等：多次请求可能产生不同结果；参数：放在请求体中

- `PUT`：更新服务器上的资源；幂等：多次请求产生相同结果；指定资源位置；参数：放在请求体中

- `HEAD`：请求页面的头部信息，只获取关于资源的信息，例如文件大小、类型、最后修改日期等，而不会获取实际内容。

- `DELETE`：删除服务器上的资源

- `OPTIONS`：用于获取当前`URL`所支持的方法。请求成功，会有一个`Allow`的头包含类似`GET,POST`这样的信息

- `TRACE`：激发远程请求消息回路，用于测试从客户端到服务器的路径

- `CONNECT`：建立隧道连接，允许客户端通过代理服务器与目标服务器建立一个直接的 TCP 连接，从而绕过代理服务器的限制，例如防火墙或内容过滤

## HTTP状态码

由三位数字组成的编码，用于指示客户端或中间代理与服务器交互的结果。根据它们的第一个数字，这些状态码被分成五个类别

- `1xx: 信息性`状态码

  - 100 Continue: 继续发送请求。
  - 101 Switching Protocols: 切换协议。

- `2xx: 成功`状态码

  - 200 OK: 请求成功。
  - 201 Created: 资源已创建。
  - 202 Accepted: 请求已接受，但未处理。
  - 204 No Content: 请求成功，但无内容。
  - 206 Partial Content: 返回部分内容。

- `3xx: 重定向`状态码

  - 301 Moved Permanently: 永久重定向。
  - 302 Found: 临时重定向。
  - 303 See Other: 使用GET请求其他资源。
  - 304 Not Modified: 资源未修改。
  - 307 Temporary Redirect: 临时重定向。
  - 308 Permanent Redirect: 永久重定向。

- `4xx: 客户端错误`状态码

  - 400 Bad Request: 错误请求。
  - 401 Unauthorized: 未授权。
  - 403 Forbidden: 禁止访问。
  - 404 Not Found: 资源未找到。
  - 405 Method Not Allowed: 方法不允许。

- `5xx: 服务器错误`状态码

  - 500 Internal Server Error: 内部服务器错误。
  - 501 Not Implemented: 未实现。
  - 502 Bad Gateway: 错误网关。
  - 503 Service Unavailable: 服务不可用。
  - 504 Gateway Timeout: 网关超时。

