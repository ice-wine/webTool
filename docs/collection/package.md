# package

定义项目所需**模块**及**配置信息**（比如名称、版本、许可证等元数据）

npm install命令根据这个配置文件，自动下载所需的模块，配置项目所需运行和开发环境

## scripts

指定运行脚本命令的npm命令行缩写，比如serve指定了运行npm run serve时，所要执行的命令。

```js
"serve": "vue-cli-service serve"
```

## dependencies & devDependencies

dependencies：项目运行所依赖的模块 npm install express --save

devDependencies：项目开发所需要的模块 npm install express --save-dev

```js
{
  "devDependencies": {
    "browserify": "~13.0.0",
    "karma-browserify": "~5.0.1"
  }
}
```

指定版本：“大版本.次要版本.小版本”，安装时只安装指定版本

~：小版本最新，~1.2.2，表示安装1.2.x的最新版本（不低于1.2.2）

^：次要版本最新，ˆ1.2.2，表示安装1.x.x的最新版本（不低于1.2.2）

latest：最新版本

## peerDependencies

供插件指定其所需要的主工具的版本

## bin

指定各个内部命令对应的可执行文件的位置

## main

指定加载的入口文件，require('moduleName')就会加载这个文件。这个字段的默认值是模块根目录下面的index.js

## config

用于添加命令行的环境变量