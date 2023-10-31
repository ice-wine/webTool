module.exports = {
  title: "web",
  themeConfig: {
    nav: [
      {
        text: "基础",
        items: [
          {
            text: "HTML",
            link: "/base/html",
          },
          {
            text: "CSS",
            link: "/base/css",
          },
          {
            text: "JS",
            link: "/base/js",
          },
        ],
      },
      {
        text: "进阶",
        items: [
          {
            text: "CSS相关",
            items: [
              {
                text: "Less & Sass",
                link: "/advanced/css/less&sass",
              },
              {
                text: "Flex",
                link: "/advanced/css/flex",
              },
            ],
          },
          {
            text: "JS相关",
            items: [
              {
                text: "ES",
                link: "/advanced/js/es",
              },
              {
                text: "TS",
                link: "/advanced/js/ts",
              },
              {
                text: "API",
                link: "/advanced/js/api",
              },
            ],
          },
          {
            text: "源码",
            items: [
              {
                text: "Vue",
                link: "/advanced/sourcecode/vue",
              },
              {
                text: "React",
                link: "/",
              },
            ],
          },
        ],
      },
      {
        text: "库&框架",
        items: [
          {
            text: "Vue",
            link: "/frame/vue",
          },
          {
            text: "React",
            link: "/frame/react",
          },
          {
            text: "NodeJs",
            link: "/frame/nodeJs",
          },
          {
            text: "移动端",
            link: "/frame/mobile",
          },
          {
            text: "微信小程序",
            link: "/frame/wechatApp",
          },
          {
            text: "Hybrid APP",
            link: "/",
          },
          {
            text: "UI相关",
            items: [
              {
                text: "Element-ui",
                link: "/frame/ui/element-ui",
              },
              {
                text: "Vant",
                link: "/frame/ui/vant",
              },
              {
                text: "AntD",
                link: "/frame/ui/antd",
              },
            ],
          },
        ],
      },
      {
        text: "算法",
        items: [
          {
            text: "基础",
            link: "/advanced/algorithm/base",
          },
          {
            text: "进阶",
            link: "/advanced/algorithm/advance",
          },
          {
            text: "前端",
            link: "/advanced/algorithm/web",
          },
        ],
      },
      {
        text: "其他",
        items: [
          {
            text: "网络",
            link: "/other/network",
          },
          {
            text: "浏览器",
            link: "/other/browser",
          },
          {
            text: "工程化",
            link: "/other/build",
            items: [
              {
                text: "webpack",
                link: "/other/build/webpack",
              },
            ],
          },
          {
            text: "前端优化",
            items: [
              {
                text: "性能优化",
                link: "/index/",
              },
              {
                text: "兼容性",
                link: "/index/",
              },
            ],
          },
          {
            text: "前端进阶",
            items: [
              {
                text: "微前端",
                link: "/index/",
              },
              {
                text: "安全",
                link: "/index/",
              },
              {
                text: "监控&埋点",
                link: "/index/",
              },
              {
                text: "缓存",
                link: "https://juejin.cn/post/6844904069178507278",
              },
            ],
          },
          {
            text: "其他",
            items: [
              {
                text: "前端规范",
                link: "/index/",
              },
              {
                text: "前端调试",
                link: "/index/",
              },
              {
                text: "Serverless",
                link: "/index/",
              },
              {
                text: "源码指引",
                link: "/index/",
              },
            ],
          },
        ],
      },
      {
        text: "面试",
        items: [
          {
            text: "面试技术",
            items: [
              {
                text: "技术",
                link: "/experience/interview/skill",
              },
              {
                text: "项目",
                link: "/experience/interview/project",
              },
              {
                text: "前端未来",
                link: "/experience/interview/future",
              },
              {
                text: "其他",
                link: "/experience/interview/other",
              },
            ],
          },
          {
            text: "面试题",
            items: [
              {
                text: "CSS",
                link: "/experience/case/css",
              },
              {
                text: "JS",
                link: "/experience/case/js",
              },
              {
                text: "Vue",
                link: "/experience/case/vue",
              },
              {
                text: "React",
                link: "/experience/case/react",
              },
              {
                text: "综合",
                link: "/experience/case/all",
              },
            ],
          },
        ],
      },
      {
        text: "代码片段",
        items: [
          {
            text: "HTML",
            link: "/experience/devSkills/html",
          },
          {
            text: "CSS",
            link: "/experience/devSkills/css",
          },
          {
            text: "JS",
            link: "/experience/devSkills/js",
          },
          {
            text: "对象处理",
            link: "/experience/devSkills/object",
          },
          {
            text: "Vue2",
            link: "/experience/devSkills/vue2",
          },
          {
            text: "其他",
            link: "/experience/devSkills/other",
          }
        ],
      },
      {
        text: "工具",
        items: [
          {
            text: "Git",
            link: "/tools/git",
          },
          {
            text: "VSCode",
            link: "/tools/vsCode",
          },
          {
            text: "Chrome",
            link: "/tools/chrome",
          },
        ],
      },
      {
        text: "更多",
        items: [
          {
            text: "正则",
            link: "/more/regexp",
          },
          {
            text: "npm",
            link: "/more/npm",
          },
          {
            text: "插件开发",
            items: [
              {
                text: "VSCode",
                link: "/more/plugs/vscode",
              },
              {
                text: "Chrome",
                link: "/more/plugs/chrome",
              },
            ],
          },
          {
            text: "其他",
            items: [
              {
                text: "package",
                link: "/collection/package",
              },
            ],
          },
        ],
      },
      {
        text: "Github",
        link: "https://github.com/ice-wine/webTool",
      },
    ],
    // 添加侧边栏
    sidebar: "auto",
  },
};
